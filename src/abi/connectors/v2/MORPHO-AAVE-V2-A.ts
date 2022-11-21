import {
    AbiItem
} from 'web3-utils'

export const MORPHO_AAVE_V2_A: ContractInterface = [{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogBorrow",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxGasForMatching",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogBorrowWithMaxGas",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogDeposit",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "onBehalf",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogDepositOnBehalf",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxGasForMatching",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogDepositWithMaxGas",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogPayback",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "onBehalf",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogPaybackOnBehalf",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "poolTokenAddress",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogWithdraw",
    "type": "event"
}, {
    "inputs": [],
    "name": "MORPHO_AAVE",
    "outputs": [{
        "internalType": "contract IMorphoCore",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "MORPHO_AAVE_LENS",
    "outputs": [{
        "internalType": "contract IMorphoAaveLens",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "borrow",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_maxGasForMatching",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "borrowWithMaxGas",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "deposit",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_onBehalf",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "depositOnBehalf",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_maxGasForMatching",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "depositWithMaxGas",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "payback",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_onBehalf",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "paybackOnBehalf",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_poolTokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}]