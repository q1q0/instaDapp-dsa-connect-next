// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const COMPOUND_V3_A: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogBorrow',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'address', name: 'from', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogBorrowOnBehalf',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'address', name: 'from', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogBorrowOnBehalfAndTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogBorrowTo',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'buyToken', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'baseSellAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'unitAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'buyAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogBuyCollateral',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'address', name: 'from', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogDepositFromUsingManager',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogDepositOnBehalf',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogPayback',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'address', name: 'from', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogPaybackFromUsingManager',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogPaybackOnBehalf',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'manager', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'allow', type: 'bool' },
    ],
    name: 'LogToggleAccountManager',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'manager', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'allow', type: 'bool' },
      { indexed: false, internalType: 'uint256', name: 'expiry', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'nonce', type: 'uint256' },
      { indexed: false, internalType: 'uint8', name: 'v', type: 'uint8' },
      { indexed: false, internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { indexed: false, internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'LogToggleAccountManagerWithPermit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'address', name: 'token', type: 'address' },
      { indexed: true, internalType: 'address', name: 'dest', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogTransferAsset',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: false, internalType: 'address', name: 'token', type: 'address' },
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'dest', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogTransferAssetOnBehalf',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'address', name: 'from', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogWithdrawOnBehalf',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'address', name: 'from', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogWithdrawOnBehalfAndTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogWithdrawTo',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'borrow',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'borrowOnBehalf',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'borrowOnBehalfAndTransfer',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'borrowTo',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'sellToken', type: 'address' },
      { internalType: 'address', name: 'buyAsset', type: 'address' },
      { internalType: 'uint256', name: 'unitAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'baseSellAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'buyCollateral',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'deposit',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'depositFromUsingManager',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'depositOnBehalf',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
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
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'payback',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'paybackFromUsingManager',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'paybackOnBehalf',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'manager', type: 'address' },
      { internalType: 'bool', name: 'isAllowed', type: 'bool' },
    ],
    name: 'toggleAccountManager',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'manager', type: 'address' },
      { internalType: 'bool', name: 'isAllowed', type: 'bool' },
      { internalType: 'uint256', name: 'nonce', type: 'uint256' },
      { internalType: 'uint256', name: 'expiry', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'toggleAccountManagerWithPermit',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'dest', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'transferAsset',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'src', type: 'address' },
      { internalType: 'address', name: 'dest', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'transferAssetOnBehalf',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'withdrawOnBehalf',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'withdrawOnBehalfAndTransfer',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'withdrawTo',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
]
