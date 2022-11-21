/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-async-promise-executor */
/* eslint-disable require-await */
/* eslint-disable no-useless-constructor */

import { /* TransactionConfig, */ TransactionReceipt } from 'web3-core'
import { Wallet } from '@ethersproject/wallet'
import { TransactionRequest } from '@ethersproject/abstract-provider'
import { Addresses } from './addresses'
import { DSA } from './dsa'

export interface TransactionCallbacks {
  onReceipt?: (receipt: TransactionReceipt) => void
  onConfirmation?: (confirmationNumber: number, receipt: TransactionReceipt, latestBlockHash?: string) => void
}

export class Transaction {
  constructor (private dsa: DSA) {}

  /**
   * Send transaction and get transaction hash.
   */
  send = async (transactionConfig: TransactionRequest, transactionCallbacks: TransactionCallbacks = {}): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      if (transactionConfig.to == Addresses.genesis) {
        throw new Error(
          'Please configure the DSA instance by calling dsa.setInstance(dsaId). More details: https://docs.instadapp.io/setup'
        )
      }

      if (this.dsa.config.mode == 'node') {
        const wallet = new Wallet(this.dsa.config.privateKey)
        const signedTransaction = await wallet.signTransaction(transactionConfig)
        // const signedTransaction = await this.dsa.provider.getSigner().signTransaction(
        //   transactionConfig,
        //   this.dsa.config.privateKey
        // )

        if (!signedTransaction) { throw new Error('Error while signing transaction. Please contact our support: https://docs.instadapp.io/') }
        wallet.sendTransaction(transactionConfig).then((txHash: any) => {
          resolve(txHash)
          return txHash
        }).catch((error: any) => {
          reject(error)
        })
      } else {
        this.dsa.web3.eth.sendTransaction(transactionConfig).on('transactionHash', (txHash) => {
          resolve(txHash)
          return txHash
        })
          .on('receipt', (receipt) => {
            transactionCallbacks.onReceipt && transactionCallbacks.onReceipt(receipt)
          })
          .on('confirmation', (confirmationNumber, receipt, latestBlockHash) => {
            transactionCallbacks.onConfirmation && transactionCallbacks.onConfirmation(confirmationNumber, receipt, latestBlockHash)
          })
          .on('error', (error) => {
            reject(error)
          })
      }
    })
  }

  /**
   * Cancel transaction.
   *
   * @param params.nonce
   * @param params.gasPrice .
   * @returns Transaction hash.
   */
  cancel = async (params: Required<Pick<TransactionRequest, 'nonce' | 'gasPrice'>>) => {
    if (!params.nonce) { throw new Error("Parameter 'nonce' not defined.") }
    if (!params.gasPrice) { throw new Error("Parameter 'gasPrice' not defined.") }

    const userAddress = await this.dsa.internal.getAddress()
    const transactionConfig: TransactionRequest = {
      from: userAddress,
      to: userAddress,
      value: 0,
      data: '0x',
      gasPrice: params.gasPrice,
      gasLimit: '27500',
      nonce: params.nonce
    }

    const transactionHash = await this.send(transactionConfig)

    return transactionHash
  }

  /**
   * Speed up transaction.
   *
   * @param params.transactionHash - Transaction hash.
   * @param params.gasPrice - Transaction hash.
   * @returns Transaction hash.
   */
  speedUp = async (
    dsa: DSA,
    params: { transactionHash: string; gasPrice: NonNullable<TransactionRequest['gasPrice']> }
  ) => {
    if (!params.transactionHash) { throw new Error("Parameter 'transactionHash' is not defined.") }
    if (!params.gasPrice) { throw new Error("Parameter 'gasPrice' is not defined.") }

    const userAddress = await this.dsa.internal.getAddress()

    if (!userAddress) { throw new Error('User address is not defined.') }

    const transaction = await this.dsa.provider.getTransaction(params.transactionHash)

    if (transaction.from.toLowerCase() !== userAddress.toLowerCase()) { throw new Error("'from' address doesnt match.") }

    const gasPrice = typeof params.gasPrice !== 'number' ? params.gasPrice : params.gasPrice.toFixed(0)

    const transactionConfig: TransactionRequest = {
      from: transaction.from,
      to: transaction.to ?? undefined,
      value: transaction.value,
      data: transaction.data,
      gasPrice,
      gasLimit: transaction.gasLimit,
      nonce: transaction.nonce
    }

    const transactionHash = await this.send(transactionConfig)

    return transactionHash
  }

  /**
   * Get transaction Nonce.
   *
   * @param transactionHash Transaction hash to get nonce.
   */
  getNonce = async (transactionHash: string) => {
    const transaction = await this.dsa.provider.getTransaction(transactionHash)

    return transaction.nonce
  }

  /**
   * Get transaction count.
   *
   * @param address Address to get transaction count for.
   * @returns Transaction count for address
   */
  getTransactionCount = async (address: string) => {
    const transactionCount = await this.dsa.provider.getTransactionCount(address)

    return transactionCount
  }
}
