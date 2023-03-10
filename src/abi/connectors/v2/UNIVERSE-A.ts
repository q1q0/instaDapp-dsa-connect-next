// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const UNIVERSE_A: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'universeVault',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountA',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountB',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'share0',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'share1',
        type: 'uint256'
      }
    ],
    name: 'LogDeposit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'universeVault',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountA',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountB',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'share0',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'share1',
        type: 'uint256'
      }
    ],
    name: 'LogWithdraw',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'universeVault', type: 'address' },
      { internalType: 'uint256', name: 'amountA', type: 'uint256' },
      { internalType: 'uint256', name: 'amountB', type: 'uint256' },
      { internalType: 'uint256[]', name: 'getIds', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'setIds', type: 'uint256[]' }
    ],
    name: 'deposit',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'universeVault', type: 'address' },
      { internalType: 'uint256', name: 'share0', type: 'uint256' },
      { internalType: 'uint256', name: 'share1', type: 'uint256' },
      { internalType: 'uint256[]', name: 'getIds', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'setIds', type: 'uint256[]' }
    ],
    name: 'withdraw',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
