import { BigNumber, utils } from 'ethers'
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
// import { TransactionRequest } from 'web3-core'
import { Deferrable } from '@ethersproject/properties'
import { TransactionRequest } from '@ethersproject/abstract-provider'
import { Wallet } from '@ethersproject/wallet'
// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'
import { Connector } from './abi/connectors'
import { TokenInfo } from './data/token-info'
import { EstimatedGasException } from './exceptions/estimated-gas-exception'
import { Spells } from './spells'
import { hasKey } from './utils/typeHelper'
import connectorV2Mapping from './data/connectorsV2_M1_mapping'
import { DSA, Abi, Addresses } from '.'

export interface GetTransactionConfigParams {
  from: NonNullable<TransactionRequest['from']>
  to: NonNullable<TransactionRequest['to']>
  data: NonNullable<TransactionRequest['data']>
  value?: TransactionRequest['value']
  gas?: TransactionRequest['gasLimit']
  gasPrice?: TransactionRequest['gasPrice']
  nonce?: TransactionRequest['nonce']
  maxPriorityFeePerGas?: TransactionRequest['maxPriorityFeePerGas']
  maxFeePerGas?: TransactionRequest['maxFeePerGas']
}

export type Version = keyof typeof Abi.connectors.versions
export { Connector } from './abi/connectors'

export type EstimateGasParams = {
  abi: ContractInterface
  args: any
} & Required<Pick<TransactionRequest, 'from' | 'to' | 'value'>>

export class Internal {
  constructor (private dsa: DSA) { }

  /**
   * Returns TransactionObject for any calls.
   *
   * Parameter `gasPrice` must be defined in mode `node` and is optional in mode `browser`.
   *
   * Parameter `nonce` only takes effect in mode `node`.
   *
   * @param params.from
   * @param params.to
   * @param params.callData
   * @param params.value (optional)
   * @param params.gas (optional)
   * @param params.gasPrice (optional only for "browser" mode)
   * @param params.nonce (optional) mostly for "node" mode
   * @param params.maxFeePerGas (optional only for "browser" mode)
   * @param params.maxPriorityFeePerGas (optional only for "browser" mode)
   */
  getTransactionConfig = async (params: GetTransactionConfigParams) => {
    if (!params.from) { throw new Error("Parameter 'from' is not defined.") }
    if (!params.to) { throw new Error("Parameter 'to' is not defined.") }
    if (!params.data) { throw new Error("Parameter 'data' is not defined.") }

    const from = params.from
    const to = params.to
    const data = params.data !== '0x' ? params.data : '0x'
    const value = params.value ?? 0
    const gas = params.gas ?? (await this.getGas({ from, to, data, value }))

    const transactionConfig: TransactionRequest = { from, to, data, value, gasLimit: gas }

    if (params.gasPrice) {
      transactionConfig.gasPrice = params.gasPrice
    }

    if (params.maxFeePerGas) {
      transactionConfig.maxFeePerGas = params.maxFeePerGas
    }

    if (params.maxPriorityFeePerGas) {
      transactionConfig.maxPriorityFeePerGas = params.maxPriorityFeePerGas
    }

    if (this.dsa.mode === 'node') {
      if (!(params.maxFeePerGas && params.maxPriorityFeePerGas) && !params.gasPrice) {
        throw new Error("Parameter 'gasPrice' or `maxFeePerGas` and `maxPriorityFeePerGas` must be defined when using mode 'node'.")
      }

      transactionConfig.nonce = params.nonce ?? (await this.getNonce(from))
    } else if (params.nonce) {
      transactionConfig.nonce = params.nonce
    }

    return transactionConfig
  }

  private getNonce = async (from: string | number) => {
    return await this.dsa.provider.getTransactionCount(String(from))
  }

  private getGas = async (transactionConfig: Deferrable<TransactionRequest>) => {
    return ((await this.dsa.provider.estimateGas(transactionConfig)).mul(BigNumber.from('11'))).div(BigNumber.from('10')).toString() // increasing gas cost by 10% for margin
  }

  /**
   * Returns the ABI interface for any DSA contract.
   */
  getInterface = (abiItems: any[], method: string) => {
    // if (typeof (abiItems) === 'string') {
    //   abiItems = JSON.parse(abiItems)
    // }
    const abiItem = abiItems.find((abiItem: any) => abiItem.name === method)

    if (!abiItem) {
      console.error(`${method} is an invalid method.`)
      return
    }

    return abiItem
  }

  /**
   * Returns encoded data of any calls.
   */
  encodeMethod = (params: { connector: Connector; method: string; args: string[] }, version: Version = this.dsa.instance.version) => {
    // type check that object has the required properties
    if (!(hasKey(Abi.connectors.versions, version) && hasKey(Abi.connectors.versions[version], params.connector))) {
      throw new Error(`ConnectorInterface '${params.method}' not found`)
    }

    // Abi.connectors.versions[version]
    const connectorInterface = this.getInterface(Abi.connectors.versions[version][params.connector], params.method)

    if (!connectorInterface) { throw new Error(`ConnectorInterface '${params.method}' not found`) }
    const iface = new utils.Interface([connectorInterface])
    return iface.encodeFunctionData(connectorInterface.name, params.args)
  }

  /**
   * Returns encoded data of spells (used via cast() mostly).
   *
   * @param params the spells instance
   * OR
   * @param params.spells the spells instance
   */
  encodeSpells = (params: Spells | { spells: Spells }, version: Version = this.dsa.instance.version) => {
    const spells = this.dsa.castHelpers.flashBorrowSpellsConvert(this.getSpells(params))

    // Convert the spell.connector into required version. Eg: compound => COMPOUND-A for DSAv2
    spells.data = spells.data.map(spell => Number(version) === 1
      ? { ...spell, connector: spell.connector }
      : hasKey(connectorV2Mapping, spell.connector)
        ? { ...spell, connector: connectorV2Mapping[spell.connector] as Connector }
        : { ...spell, connector: spell.connector }
    )

    const targets = spells.data.map(spell => this.getTarget(spell.connector, version))
    const encodedMethods = spells.data.map(spell => this.encodeMethod(spell, version))

    return { targets, spells: encodedMethods }
  }

  private getSpells = (params: Spells | { spells: Spells }) => {
    return params instanceof Spells ? params : params.spells
  }

  /**
   * Returns the input interface required for cast().
   */
  private getTarget = (connector: Connector, version: Version = this.dsa.instance.version) => {
    const chainId = this.dsa.instance.chainId

    // type check that object has the required properties
    if (
      !(hasKey(Addresses.connectors.chains[chainId].versions, version) &&
        hasKey(Addresses.connectors.chains[chainId].versions[version], connector))
    ) {
      return console.error(`${connector} is invalid connector.`)
    }

    const target = Addresses.connectors.chains[chainId].versions[version][connector]

    if (!target) { return console.error(`${connector} is invalid connector.`) }

    // return target address for version 1 and connector name for version 2
    return version === 2 ? connector : target
  }

  /**
   * Returns the input interface required for cast().
   */
  getAddress = async () => {
    if (this.dsa.config.mode == 'node') {
      return new Wallet(this.dsa.config.privateKey).address
    } else if (this.dsa.config.mode == 'simulation') { return this.dsa.config.publicKey }

    // otherwise, browser
    const address = await this.dsa.provider.getSigner().getAddress()

    if (!address) {
      console.log('No ethereum address detected.')
      return
    }

    return address
  }

  /**
   * Returns the address from token key OR checksum the address if not.
   */
  filterAddress = (token: keyof typeof TokenInfo | string) => {
    const isAddress = utils.isAddress(token.toLowerCase())
    if (isAddress) {
      return utils.getAddress(token.toLowerCase())
    } else {
      const info = TokenInfo[token as keyof typeof TokenInfo]

      if (!info) { throw new Error("'token' symbol not found.") }

      return utils.getAddress(info.address)
    }
  }

  /**
   * Returns the estimated gas cost.
   *
   * @param params.from the from address
   * @param params.to the to address
   * @param params.abi the ABI method single interface
   * @param params.args the method arguments
   * @param params.value the call ETH value
   */
  estimateGas = async (params: EstimateGasParams) => {
    let abi = params.abi as any
    const name = abi?.name
    if (!Array.isArray(abi)) {
      abi = [abi]
    }
    const iface = new utils.Interface(abi)
    const data = iface.encodeFunctionData(name, params.args)

    try {
      const estimatedGas = await this.dsa.provider.estimateGas({
        from: params.from,
        to: params.to,
        data,
        value: params.value
      })

      return estimatedGas
    } catch (error: any) {
      throw new EstimatedGasException(error, { ...params, data })
    }
  }
}
