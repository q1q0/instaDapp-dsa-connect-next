// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const POOLTOGETHER_A: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenFaucet',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'claimed',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'LogClaim',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenFaucetProxyFactory',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'contract TokenFaucetInterface[]',
        name: 'tokenFaucets',
        type: 'address[]'
      }
    ],
    name: 'LogClaimAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'podTokenDrop',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'claimed',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'LogClaimPodTokenDrop',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'prizePool',
        type: 'address'
      },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'controlledToken',
        type: 'address'
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
    name: 'LogDepositTo',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'prizePoolToken',
        type: 'address'
      },
      { indexed: false, internalType: 'address', name: 'pod', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'podShare',
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
    name: 'LogDepositToPod',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'pod', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shareAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxFee',
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
    name: 'LogWithdrawFromPod',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'prizePool',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'controlledToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maximumExitFee',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exitFee',
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
    name: 'LogWithdrawInstantlyFrom',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'tokenFaucet', type: 'address' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'claim',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenFaucetProxyFactory',
        type: 'address'
      },
      {
        internalType: 'contract TokenFaucetInterface[]',
        name: 'tokenFaucets',
        type: 'address[]'
      }
    ],
    name: 'claimAll',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'podTokenDrop', type: 'address' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'claimPodTokenDrop',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'prizePool', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'controlledToken', type: 'address' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'depositTo',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'prizePoolToken', type: 'address' },
      { internalType: 'address', name: 'pod', type: 'address' },
      { internalType: 'uint256', name: 'tokenAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'depositToPod',
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
      { internalType: 'address', name: 'pod', type: 'address' },
      { internalType: 'uint256', name: 'shareAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'maxFee', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'withdrawFromPod',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'prizePool', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'controlledToken', type: 'address' },
      { internalType: 'uint256', name: 'maximumExitFee', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'withdrawInstantlyFrom',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  }
]
