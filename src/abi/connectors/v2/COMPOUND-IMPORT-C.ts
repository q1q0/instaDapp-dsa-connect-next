// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const COMPOUND_IMPORT_C: ContractInterface = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address[]","name":"ctokens","type":"address[]"},{"indexed":false,"internalType":"string[]","name":"supplyIds","type":"string[]"},{"indexed":false,"internalType":"string[]","name":"borrowIds","type":"string[]"},{"indexed":false,"internalType":"uint256[]","name":"supplyAmts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"borrowAmts","type":"uint256[]"}],"name":"LogCompoundImport","type":"event"},{"inputs":[{"internalType":"address","name":"userAccount","type":"address"},{"internalType":"string[]","name":"supplyIds","type":"string[]"},{"internalType":"string[]","name":"borrowIds","type":"string[]"},{"internalType":"uint256[]","name":"flashFees","type":"uint256[]"},{"internalType":"uint256","name":"times","type":"uint256"},{"internalType":"bool","name":"isFlash","type":"bool"}],"name":"importCompound","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string[]","name":"supplyIds","type":"string[]"},{"internalType":"string[]","name":"borrowIds","type":"string[]"},{"internalType":"uint256","name":"times","type":"uint256"},{"internalType":"bool","name":"isFlash","type":"bool"},{"internalType":"uint256[]","name":"flashFees","type":"uint256[]"}],"name":"migrateCompound","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]