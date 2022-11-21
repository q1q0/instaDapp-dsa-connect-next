// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const instapool: ContractInterface = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'addFeeAmount',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'flashBorrow',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amts',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'getId',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'setId',
        type: 'uint256[]',
      },
    ],
    name: 'flashMultiBorrow',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'getId',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'setId',
        type: 'uint256[]',
      },
    ],
    name: 'flashMultiPayback',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'getId',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'setId',
        type: 'uint256[]',
      },
    ],
    name: 'flashMultiPaybackOrigin',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'flashPayback',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'flashPaybackOrigin',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'LogDepositLiquidity',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'LogFlashBorrow',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feeCollected',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'LogFlashPayback',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'originFeeAmt',
        type: 'uint256',
      },
    ],
    name: 'LogOriginFeeCollected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'LogWithdrawLiquidity',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'connectorID',
    outputs: [
      {
        internalType: 'uint256',
        name: '_type',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
