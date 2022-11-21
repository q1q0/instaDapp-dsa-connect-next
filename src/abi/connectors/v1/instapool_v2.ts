// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const instapool_v2: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'token',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'tokenAmt',
        type: 'uint256[]',
      },
    ],
    name: 'LogDydxFlashBorrow',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'token',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'tokenAmt',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'totalAmtFee',
        type: 'uint256[]',
      },
    ],
    name: 'LogDydxFlashPayback',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'flashAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'addFeeAmount',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'connectorID',
    outputs: [
      { internalType: 'uint256', name: '_type', type: 'uint256' },
      { internalType: 'uint256', name: '_id', type: 'uint256' },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'route', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'flashBorrowAndCast',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'tokens', type: 'address[]' },
      { internalType: 'uint256[]', name: 'amts', type: 'uint256[]' },
      { internalType: 'uint256', name: 'route', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'flashMultiBorrowAndCast',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'tokens', type: 'address[]' },
      { internalType: 'uint256[]', name: 'amts', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'getId', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'setId', type: 'uint256[]' },
    ],
    name: 'flashMultiPayback',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'flashPayback',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
]
