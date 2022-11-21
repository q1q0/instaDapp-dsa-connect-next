import { AbiItem } from "../../../utils/types"

export const basic: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'erc20',
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
    name: 'LogDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenAmt',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
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
    name: 'LogWithdraw',
    type: 'event',
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
      { internalType: 'address', name: 'erc20', type: 'address' },
      { internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEthAddr',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEventAddr',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMemoryAddr',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'erc20', type: 'address' },
      { internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { internalType: 'address payable', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]
