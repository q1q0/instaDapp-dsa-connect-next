// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const LIQUITY_A: ContractInterface = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxFeePercentage',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'depositAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'borrowAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'getIds',
        type: 'uint256[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'setIds',
        type: 'uint256[]'
      }
    ],
    name: 'LogAdjust',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
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
    name: 'LogBorrow',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'LogClaimCollateralFromRedemption',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ethGain',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lusdGain',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setEthGainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setLusdGainId',
        type: 'uint256'
      }
    ],
    name: 'LogClaimStakingGains',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256'
      }
    ],
    name: 'LogClose',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
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
    name: 'LogDeposit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxFeePercentage',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'depositAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'borrowAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'getIds',
        type: 'uint256[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'setIds',
        type: 'uint256[]'
      }
    ],
    name: 'LogOpen',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
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
    name: 'LogRepay',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ethGain',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lqtyGain',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'frontendTag',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getDepositId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setDepositId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setEthGainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setLqtyGainId',
        type: 'uint256'
      }
    ],
    name: 'LogStabilityDeposit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'LogStabilityMoveEthGainToTrove',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ethGain',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lqtyGain',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getWithdrawId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setWithdrawId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setEthGainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setLqtyGainId',
        type: 'uint256'
      }
    ],
    name: 'LogStabilityWithdraw',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getStakeId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setStakeId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setEthGainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setLusdGainId',
        type: 'uint256'
      }
    ],
    name: 'LogStake',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getUnstakeId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setUnstakeId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setEthGainId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setLusdGainId',
        type: 'uint256'
      }
    ],
    name: 'LogUnstake',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
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
    name: 'LogWithdraw',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'maxFeePercentage', type: 'uint256' },
      { internalType: 'uint256', name: 'depositAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'withdrawAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'borrowAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'repayAmount', type: 'uint256' },
      { internalType: 'address', name: 'upperHint', type: 'address' },
      { internalType: 'address', name: 'lowerHint', type: 'address' },
      { internalType: 'uint256[]', name: 'getIds', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'setIds', type: 'uint256[]' }
    ],
    name: 'adjust',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'maxFeePercentage', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'upperHint', type: 'address' },
      { internalType: 'address', name: 'lowerHint', type: 'address' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'borrow',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'setId', type: 'uint256' }],
    name: 'claimCollateralFromRedemption',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'setEthGainId', type: 'uint256' },
      { internalType: 'uint256', name: 'setLusdGainId', type: 'uint256' }
    ],
    name: 'claimStakingGains',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'setId', type: 'uint256' }],
    name: 'close',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'upperHint', type: 'address' },
      { internalType: 'address', name: 'lowerHint', type: 'address' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'deposit',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
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
      { internalType: 'uint256', name: 'depositAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'maxFeePercentage', type: 'uint256' },
      { internalType: 'uint256', name: 'borrowAmount', type: 'uint256' },
      { internalType: 'address', name: 'upperHint', type: 'address' },
      { internalType: 'address', name: 'lowerHint', type: 'address' },
      { internalType: 'uint256[]', name: 'getIds', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'setIds', type: 'uint256[]' }
    ],
    name: 'open',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'upperHint', type: 'address' },
      { internalType: 'address', name: 'lowerHint', type: 'address' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'repay',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'frontendTag', type: 'address' },
      { internalType: 'uint256', name: 'getDepositId', type: 'uint256' },
      { internalType: 'uint256', name: 'setDepositId', type: 'uint256' },
      { internalType: 'uint256', name: 'setEthGainId', type: 'uint256' },
      { internalType: 'uint256', name: 'setLqtyGainId', type: 'uint256' }
    ],
    name: 'stabilityDeposit',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'upperHint', type: 'address' },
      { internalType: 'address', name: 'lowerHint', type: 'address' }
    ],
    name: 'stabilityMoveEthGainToTrove',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'getWithdrawId', type: 'uint256' },
      { internalType: 'uint256', name: 'setWithdrawId', type: 'uint256' },
      { internalType: 'uint256', name: 'setEthGainId', type: 'uint256' },
      { internalType: 'uint256', name: 'setLqtyGainId', type: 'uint256' }
    ],
    name: 'stabilityWithdraw',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'getStakeId', type: 'uint256' },
      { internalType: 'uint256', name: 'setStakeId', type: 'uint256' },
      { internalType: 'uint256', name: 'setEthGainId', type: 'uint256' },
      { internalType: 'uint256', name: 'setLusdGainId', type: 'uint256' }
    ],
    name: 'stake',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'getUnstakeId', type: 'uint256' },
      { internalType: 'uint256', name: 'setUnstakeId', type: 'uint256' },
      { internalType: 'uint256', name: 'setEthGainId', type: 'uint256' },
      { internalType: 'uint256', name: 'setLusdGainId', type: 'uint256' }
    ],
    name: 'unstake',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'upperHint', type: 'address' },
      { internalType: 'address', name: 'lowerHint', type: 'address' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'withdraw',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  }
]
