/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
// import { TransactionConfig } from 'web3-core'
import { TransactionRequest } from '@ethersproject/abstract-provider'
// import { Contract } from 'web3-eth-contract'
import { Contract } from '@ethersproject/contracts'
import BigNumber from 'bignumber.js'
import { BigNumber as EtherBigNum, utils } from 'ethers'
import { Abi } from '../abi'
import { DSA } from '../dsa'
import { Addresses } from '../addresses'
import { TokenInfo } from '../data/token-info'
import { GetTransactionConfigParams } from '../internal'
import * as Math from './math'

/**
 * @param {address} _d.token token address or symbol
 * @param {string} _d.amount token amount
 * @param {address|string} _d.from (optional) token
 * @param {number|string} _d.to (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
type Erc20EulerInputParams = {
  token: keyof typeof TokenInfo | string,
  amount: string,
} & Pick<TransactionRequest, 'from' | 'gasLimit' | 'gasPrice' | 'maxFeePerGas'| 'maxPriorityFeePerGas' | 'nonce' | 'to'>

/**
 * @param {number|string} _d. subaccount id (0 for primary and 1 - 255 for sub-account)
 * @param {address} _d.token token address or symbol
 * @param {string} _d.amount token amount
 * @param {address|string} _d.from (optional) token
 * @param {number|string} _d.to (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
type Erc20EulerApproveSubAccountInputParams = {
    subAccountId: number | string,
    token: keyof typeof TokenInfo | string,
    amount: string,
  } & Pick<TransactionRequest, 'from' | 'gasLimit' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce' | 'to'>

/**
 * generic ERC20 token methods
 */

export class Erc20Euler {
  constructor (private dsa: DSA) {}
  /**
     * Transfer
     */
  async transfer (params: Erc20EulerInputParams): Promise<string> {
    const txObj: TransactionRequest = await this.transferTxObj(params)

    return this.dsa.sendTransaction(txObj)
  }

  /**
    * Transfer Tx object
    */
  async transferTxObj (params: Erc20EulerInputParams): Promise<TransactionRequest> {
    if (!params.to) {
      params.to = this.dsa.instance.address
    }

    if (params.to === Addresses.genesis) {
      throw new Error("'to' is not defined and instance is not set.")
    }

    if (!params.amount) {
      throw new Error("'amount' is not a number")
    }

    if (!params.from) {
      params.from = await this.dsa.internal.getAddress()
    }

    let txObj: TransactionRequest

    if (['eth', TokenInfo.eth.address].includes(params.token.toLowerCase())) {
      if (['-1', this.dsa.maxValue].includes(params.amount)) {
        throw new Error("ETH amount value cannot be passed as '-1'.")
      }

      txObj = await this.dsa.internal.getTransactionConfig({
        from: params.from,
        to: params.to,
        data: '0x',
        gas: params.gasLimit,
        gasPrice: params.gasPrice,
        maxFeePerGas: params.maxFeePerGas,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas,
        nonce: params.nonce,
        value: params.amount
      } as GetTransactionConfigParams)
    } else {
      const toAddr: string = params.to
      params.to = this.dsa.internal.filterAddress(params.token)
      const contract: Contract = new Contract(params.to as string, Abi.basics.erc20Euler, this.dsa.config.provider.getSigner())

      if (['-1', this.dsa.maxValue].includes(params.amount)) {
        await contract
          .balanceOf(params.from)
          .then((bal: any) => (params.amount = bal))
          .catch((err: any) => {
            throw new Error(`Error while getting token balance: ${err}`)
          })
      } else {
        params.amount = EtherBigNum.from(params.amount).toString()
      }
      // const data: string = contract.methods
      //   .transfer(toAddr, params.amount)
      //   .encodeABI()

      const ABI = this.dsa.internal.getInterface(Abi.basics.erc20Euler as any, 'transfer')
      const iface = new utils.Interface([ABI])
      const data: string = iface.encodeFunctionData(ABI.name, [toAddr, params.amount])

      txObj = await this.dsa.internal.getTransactionConfig({
        from: params.from,
        to: params.to,
        data,
        gas: params.gasLimit,
        gasPrice: params.gasPrice,
        maxFeePerGas: params.maxFeePerGas,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas,
        nonce: params.nonce,
        value: 0
      } as GetTransactionConfigParams)
    }

    return txObj
  }

  /**
    * Approve Sub Account
    */
  async approveSubAccount (params: Erc20EulerApproveSubAccountInputParams): Promise<string> {
    const txObj: TransactionRequest = await this.approveSubAccTxObj(params)

    return this.dsa.sendTransaction(txObj)
  }

  /**
    * Approve Token Tx Obj
    */
  async approveSubAccTxObj (params: Erc20EulerApproveSubAccountInputParams): Promise<TransactionRequest> {
    if (!params.to) {
      throw new Error("Parameter 'to' is missing")
    }
    if (!params.from) {
      params.from = await this.dsa.internal.getAddress()
    }
    if (
      (new BigNumber(params.subAccountId).gte(256))
    ) {
      throw new Error("'subAccountId' cannot be greater than 255")
    }

    let txObj: TransactionRequest

    if (['eth', TokenInfo.eth.address].includes(params.token.toLowerCase())) {
      throw new Error('ETH does not require approve.')
    } else {
      const toAddr: string = params.to
      params.to = this.dsa.internal.filterAddress(params.token)
      // const contract = new Contract(params.to as string, Abi.basics.erc20Euler, this.dsa.config.provider.getSigner())
      // const data: string = contract.methods
      //   .approveSubAccount(params.subAccountId, toAddr, params.amount)
      //   .encodeABI()

      const ABI = this.dsa.internal.getInterface(Abi.basics.erc20Euler as any, 'approveSubAccount')
      const iface = new utils.Interface([ABI])
      const data: string = iface.encodeFunctionData(ABI.name, [params.subAccountId, toAddr, params.amount])

      txObj = await this.dsa.internal.getTransactionConfig({
        from: params.from,
        to: params.to,
        data,
        gas: params.gasLimit,
        gasPrice: params.gasPrice,
        maxFeePerGas: params.maxFeePerGas,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas,
        nonce: params.nonce,
        value: 0
      } as GetTransactionConfigParams)
    }

    return txObj
  }
}
