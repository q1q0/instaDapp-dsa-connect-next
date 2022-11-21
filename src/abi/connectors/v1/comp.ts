// // import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const comp: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'compAmt',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'LogClaimedComp',
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
    name: 'ClaimComp',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'supplyTokenIds', type: 'string[]' },
      { internalType: 'string[]', name: 'borrowTokenIds', type: 'string[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'ClaimCompThree',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'tokenIds', type: 'string[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'ClaimCompTwo',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'connectorID',
    outputs: [
      { internalType: 'uint256', name: '_type', type: 'uint256' },
      { internalType: 'uint256', name: '_id', type: 'uint256' }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'delegatee', type: 'address' }],
    name: 'delegate',
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
  }
]
