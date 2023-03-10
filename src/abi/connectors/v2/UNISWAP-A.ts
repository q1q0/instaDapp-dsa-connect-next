// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const UNISWAP_A: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sellToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'buyAmt',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sellAmt',
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
    name: 'LogBuy',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenA',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenB',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amtA',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amtB',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'uniAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getIdA',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getIdB',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'LogDepositLiquidity',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sellToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'buyAmt',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sellAmt',
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
    name: 'LogSell',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenA',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenB',
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
        name: 'uniAmount',
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
        internalType: 'uint256[]',
        name: 'setId',
        type: 'uint256[]'
      }
    ],
    name: 'LogWithdrawLiquidity',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'buyAddr', type: 'address' },
      { internalType: 'address', name: 'sellAddr', type: 'address' },
      { internalType: 'uint256', name: 'buyAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'unitAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'connectorID',
    outputs: [
      { internalType: 'uint256', name: 'model', type: 'uint256' },
      { internalType: 'uint256', name: 'id', type: 'uint256' }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'tokenA', type: 'address' },
      { internalType: 'address', name: 'tokenB', type: 'address' },
      {
        internalType: 'uint256',
        name: 'amountADesired',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amountBDesired',
        type: 'uint256'
      },
      { internalType: 'uint256', name: 'slippage', type: 'uint256' },
      { internalType: 'uint256', name: 'getIdA', type: 'uint256' },
      { internalType: 'uint256', name: 'getIdB', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'deposit',
    outputs: [],
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
      { internalType: 'address', name: 'buyAddr', type: 'address' },
      { internalType: 'address', name: 'sellAddr', type: 'address' },
      { internalType: 'uint256', name: 'sellAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'unitAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'sell',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'tokenA', type: 'address' },
      { internalType: 'address', name: 'tokenB', type: 'address' },
      { internalType: 'uint256', name: 'amountA', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'minUniAmount',
        type: 'uint256'
      },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'singleDeposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'tokenA', type: 'address' },
      { internalType: 'address', name: 'tokenB', type: 'address' },
      { internalType: 'uint256', name: 'uniAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'unitAmtA', type: 'uint256' },
      { internalType: 'uint256', name: 'unitAmtB', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256[]', name: 'setIds', type: 'uint256[]' }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  }
]
