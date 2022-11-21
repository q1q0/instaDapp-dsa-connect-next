// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const STAKE_ERC20_A: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'rewardToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'stakingType',
        type: 'bytes32'
      },
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
        indexed: true,
        internalType: 'address',
        name: 'stakingToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'stakingType',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
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
        name: 'stakingToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'stakingType',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardAmt',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setIdAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setIdReward',
        type: 'uint256'
      }
    ],
    name: 'LogWithdrawAndClaimedReward',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'string', name: 'stakingPoolName', type: 'string' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'claimReward',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'stakingPoolName', type: 'string' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'deposit',
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
  },
  {
    inputs: [
      { internalType: 'string', name: 'stakingPoolName', type: 'string' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdReward', type: 'uint256' }
    ],
    name: 'withdraw',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  }
]
