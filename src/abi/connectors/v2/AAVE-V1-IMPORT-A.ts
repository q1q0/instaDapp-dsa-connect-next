import { AbiItem } from 'web3-utils'

export const AAVE_V1_IMPORT_A: AbiItem[] = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address[]","name":"supplyTokens","type":"address[]"},{"indexed":false,"internalType":"address[]","name":"borrowTokens","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"supplyAmts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"borrowAmts","type":"uint256[]"}],"name":"LogAaveV1Import","type":"event"},{"inputs":[{"internalType":"address","name":"userAccount","type":"address"},{"internalType":"address[]","name":"supplyTokens","type":"address[]"},{"internalType":"address[]","name":"borrowTokens","type":"address[]"}],"name":"importAave","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]