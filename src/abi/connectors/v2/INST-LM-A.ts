// import { AbiItem } from 'web3-utils'
import { ContractInterface } from '@ethersproject/contracts'

export const INST_LM_A: ContractInterface = [{"inputs":[{"internalType":"address","name":"_instaLMMerkle","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cycle","type":"uint256"}],"name":"LogClaim","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"cumulativeAmount","type":"uint256"},{"internalType":"uint256","name":"cycle","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"instaLMMerkle","outputs":[{"internalType":"contract InstaLMMerkleInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]