// // import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const aave: ContractInterface = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'borrow',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'connectorID',
    outputs: [
      {
        internalType: 'uint256',
        name: 'model',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'payback',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  }
]
