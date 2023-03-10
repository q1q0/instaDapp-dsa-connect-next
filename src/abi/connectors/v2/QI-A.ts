// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const QI_A: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardAmt',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'LogClaimedReward',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'delegatee',
        type: 'address'
      }
    ],
    name: 'LogDelegate',
    type: 'event'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'setId', type: 'uint256' }],
    name: 'ClaimAvaxReward',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'supplyTokenIds', type: 'string[]' },
      { internalType: 'string[]', name: 'borrowTokenIds', type: 'string[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'ClaimAvaxRewardThree',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'tokenIds', type: 'string[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'ClaimAvaxRewardTwo',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'setId', type: 'uint256' }],
    name: 'ClaimQiReward',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'supplyTokenIds', type: 'string[]' },
      { internalType: 'string[]', name: 'borrowTokenIds', type: 'string[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'ClaimQiRewardThree',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'tokenIds', type: 'string[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'ClaimQiRewardTwo',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'delegatee', type: 'address' }],
    name: 'delegate',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  }
]
