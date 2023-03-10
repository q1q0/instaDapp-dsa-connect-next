// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts';

export const math: ContractInterface = [
  {
    inputs: [
      { internalType: 'uint256[]', name: 'getIds', type: 'uint256[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'addIds',
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
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'getIdOne', type: 'uint256' },
      { internalType: 'uint256', name: 'getIdTwo', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'subIds',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];
