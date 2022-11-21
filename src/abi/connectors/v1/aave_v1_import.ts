/* eslint-disable camelcase */
// // import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const aave_v1_import: ContractInterface = [
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
