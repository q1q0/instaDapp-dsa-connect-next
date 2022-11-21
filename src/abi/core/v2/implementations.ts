// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const implementations: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes4[]',
        name: 'sigs',
        type: 'bytes4[]'
      }
    ],
    name: 'LogAddImplementation',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes4[]',
        name: 'sigs',
        type: 'bytes4[]'
      }
    ],
    name: 'LogRemoveImplementation',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldImplementation',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newImplementation',
        type: 'address'
      }
    ],
    name: 'LogSetDefaultImplementation',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: '_implementation', type: 'address' },
      { internalType: 'bytes4[]', name: '_sigs', type: 'bytes4[]' }
    ],
    name: 'addImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'defaultImplementation',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: '_sig', type: 'bytes4' }],
    name: 'getImplementation',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_impl', type: 'address' }],
    name: 'getImplementationSigs',
    outputs: [{ internalType: 'bytes4[]', name: '', type: 'bytes4[]' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: '_sig', type: 'bytes4' }],
    name: 'getSigImplementation',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'instaIndex',
    outputs: [
      { internalType: 'contract IndexInterface', name: '', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_implementation', type: 'address' }
    ],
    name: 'removeImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_defaultImplementation',
        type: 'address'
      }
    ],
    name: 'setDefaultImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
