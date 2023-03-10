/* eslint-disable camelcase */
import { ContractInterface } from '@ethersproject/contracts'

export const aave_v2_import: ContractInterface = [
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
        name: 'userAccount',
        type: 'address'
      },
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]'
      },
      {
        internalType: 'bool',
        name: 'convertStable',
        type: 'bool'
      }
    ],
    name: 'importAave',
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
  }
]
