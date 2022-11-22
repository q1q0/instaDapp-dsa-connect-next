/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
// import { TransactionConfig } from 'web3-core'
import { TransactionRequest } from '@ethersproject/abstract-provider'
// import { Contract } from 'web3-eth-contract'
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { Abi } from '../abi'
import { DSA } from '../dsa'
import { Addresses } from '../addresses'
import { TokenInfo } from '../data/token-info'
import { GetTransactionConfigParams } from '../internal'
import * as Math from './math'

/**
 * @param {address} _d.token token address or symbol
 * @param {string} _d.tokenId token id
 * @param {address|string} _d.from (optional) token
 * @param {number|string} _d.to (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
type Erc721InputParams = {
  token: keyof typeof TokenInfo | string,
  tokenId: number,
} & Pick<TransactionRequest, 'from' | 'gasLimit' | 'gasPrice' | 'maxFeePerGas'| 'maxPriorityFeePerGas' | 'nonce' | 'to'>

/**
 * generic ERC20 token methods
 */

export class Erc721 {
  constructor (private dsa: DSA) {}
  /**
     * Transfer
     */
  async transfer (params: Erc721InputParams): Promise<string> {
    const txObj: TransactionRequest = await this.transferTxObj(params)

    return this.dsa.sendTransaction(txObj)
  }

  /**
    * Transfer Tx object
    */
  async transferTxObj (params: Erc721InputParams): Promise<TransactionRequest> {
    if (!params.to) {
      params.to = this.dsa.instance.address
    }

    if (params.to === Addresses.genesis) {
      throw new Error("'to' is not defined and instance is not set.")
    }

    if (!params.tokenId) {
      throw new Error("'tokenId' is not a number")
    }

    if (!params.from) {
      params.from = await this.dsa.internal.getAddress()
    }

    const toAddr: string = params.to
    params.to = this.dsa.internal.filterAddress(params.token)
    // const contract: Contract = new Contract(params.to as string, Abi.basics.erc721, this.dsa.config.provider.getSigner())

    // const data: string = contract.methods
    //   .safeTransferFrom(params.from, toAddr, params.tokenId)
    //   .encodeABI()

    const ABI = [
      'function safeTransferFrom(address from, address to, uint256 tokenId)'
    ]
    const iface = new utils.Interface(ABI)
    const data: string = iface.encodeFunctionData('safeTransferFrom', [params.from, toAddr, params.tokenId])

    const txObj = await this.dsa.internal.getTransactionConfig({
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

    return txObj
  }

  /**
    * Approve
    */
  async approve (params: Erc721InputParams): Promise<string> {
    const txObj: TransactionRequest = await this.approveTxObj(params)

    return this.dsa.sendTransaction(txObj)
  }

  /**
    * Approve Token Tx Obj
    */
  async approveTxObj (params: Erc721InputParams): Promise<TransactionRequest> {
    if (!params.to) {
      throw new Error("Parameter 'to' is missing")
    }
    if (!params.from) {
      params.from = await this.dsa.internal.getAddress()
    }

    const toAddr: string = params.to
    params.to = this.dsa.internal.filterAddress(params.token)
    // const contract = new Contract(params.to as string, Abi.basics.erc20, this.dsa.provider.getSigner())
    // const data: string = contract.methods
    //   .approve(toAddr, params.tokenId)
    //   .encodeABI()

    const ABI = [
      'function approve(address _spender, uint256 _value)'
    ]
    const iface = new utils.Interface(ABI)
    const data: string = iface.encodeFunctionData('approve', [toAddr, params.tokenId])

    const txObj = await this.dsa.internal.getTransactionConfig({
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

    return txObj
  }
}
