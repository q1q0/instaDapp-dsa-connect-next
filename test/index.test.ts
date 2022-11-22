/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, it, describe, beforeAll, vi } from 'vitest'
import { config } from 'dotenv'
import waitForExpect from 'wait-for-expect'
import { JsonRpcProvider } from '@ethersproject/providers'
import { utils } from 'ethers'
// import Web3 from 'web3'
// import hre from 'hardhat'
// import '@nomiclabs/hardhat-ethers'
// import '@nomiclabs/hardhat-web3'
import DSA from '../src'

config()

let web3: JsonRpcProvider
let dsa: DSA
let account: string

const ethAddr = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
const usdcAddr = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
const daiAddr = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

beforeAll(() => {
  web3 = new JsonRpcProvider('http://localhost:8545')
  dsa = new DSA(web3)
})

describe('Basic', function () {
  it('initalization of DSA', () => {
    expect(dsa).toBeDefined()
  })
  it('get web3 accounts', async () => {
    const [accountOne, accountTwo] = await web3.listAccounts()
    expect(accountOne).toBeDefined()
    expect(accountTwo).toBeDefined()
    account = accountOne
  })
})

describe('DSA v1', function () {
  it('create new dsa v1', async () => {
    let dsaAccounts = await dsa.accounts.getAccounts(account)
    const accountCount = dsaAccounts.length

    await dsa.build({ version: 1 })

    dsaAccounts = await dsa.accounts.getAccounts(account)
    expect(dsaAccounts.length).toEqual(accountCount + 1)

    const createdDSA = dsaAccounts[dsaAccounts.length - 1]

    await dsa.setAccount(createdDSA.id)
    expect(dsa.instance.id).toEqual(createdDSA.id)
    expect(dsa.instance.version).toEqual(1)
  })

  it('Cast with flashloan', async () => {
    const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

    const spells = dsa.Spell()
    spells.add({
      connector: 'basic',
      method: 'withdraw',
      args: [usdcAddress, 0, account, 0, 0]
    })

    spells.add({
      connector: 'instapool_v2',
      method: 'flashBorrow',
      args: [usdcAddress, '10000000', 0]
    })
    spells.add({
      connector: 'instapool_v2',
      method: 'flashPayback',
      args: [usdcAddress, '10000000', 0, 0]
    })

    const calldata = await dsa.encodeCastABI(spells)
    expect(calldata).toBeDefined()

    const txHash = await dsa.cast({ spells, from: account })
    expect(txHash).toBeDefined()
  })

  it('Cast with flashloan with multiple', async () => {
    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'withdraw',
      args: [usdcAddr, 0, account, 0, 0]
    })

    spells.add({
      connector: 'instapool_v2',
      method: 'flashBorrow',
      args: [usdcAddr, '10000000', 0]
    })
    spells.add({
      connector: 'compound',
      method: 'withdraw',
      args: [ethAddr, '100000000000', 0, 0]
    })

    spells.add({
      connector: 'instapool_v2',
      method: 'flashBorrow',
      args: [daiAddr, '1000000000000000', 0]
    })

    spells.add({
      connector: 'aave',
      method: 'borrow',
      args: [daiAddr, '1000000000000000', 0, 0]
    })

    spells.add({
      connector: 'instapool_v2',
      method: 'flashPayback',
      args: [daiAddr, '1000000000000000', 0, 0]
    })

    spells.add({
      connector: 'instapool_v2',
      method: 'flashPayback',
      args: [usdcAddr, '10000000', 0, 0]
    })

    const calldata = await dsa.encodeCastABI(spells)
    expect(calldata).toBeDefined()

    // const txHash = await dsa.cast({ spells: spells, from: process.env.PUBLIC_ADDRESS }) // Throws error due to connector
  })

  it('Deposit 10 ETH to DSA', async () => {
    const amt = utils.parseUnits('10', 'ether')
    const data = {
      token: ethAddr,
      amount: amt.toString(),
      to: dsa.instance.address,
      from: account
    }
    await dsa.erc20.transfer(data)

    const balance = await web3.getBalance(dsa.instance.address)
    expect(balance.toString()).toEqual(amt.toString())
  })

  it('Swap 1 ETH to USDC', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Withdraw USDC from DSA', async () => {
    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'withdraw',
      args: [usdcAddr, dsa.maxValue, account, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Give USDC allowance', async () => {
    const data = {
      token: usdcAddr,
      amount: '1000000000000',
      to: dsa.instance.address
    }
    await dsa.erc20.approve(data)

    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'deposit',
      args: [usdcAddr, dsa.maxValue, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Swap 1 ETH to USDC #2', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Deposit ETH to Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'compound',
      method: 'deposit',
      args: ['ETH-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Borrow DAI from Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('10', 'ether')
    spells.add({
      connector: 'compound',
      method: 'borrow',
      args: ['DAI-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Payback DAI to Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('10', 'ether')
    spells.add({
      connector: 'compound',
      method: 'payback',
      args: ['DAI-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Withdraw ETH from Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('0.9', 'ether')
    spells.add({
      connector: 'compound',
      method: 'withdraw',
      args: ['ETH-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Swap 1 ETH to DAI', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [daiAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Deposit ETH, Borrow DAI, Payback DAI, Withdraw ETH', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    const amt2 = utils.parseUnits('100', 'ether')
    spells.add({
      connector: 'compound',
      method: 'deposit',
      args: ['ETH-A', amt.toString(), 0, 0]
    })
    spells.add({
      connector: 'compound',
      method: 'borrow',
      args: ['DAI-A', amt2.toString(), 0, 0]
    })
    spells.add({
      connector: 'compound',
      method: 'payback',
      args: ['DAI-A', dsa.maxValue, 0, 0]
    })
    spells.add({
      connector: 'compound',
      method: 'withdraw',
      args: ['ETH-A', dsa.maxValue, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Object-oriented Spells', async () => {
    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'withdraw',
      args: [daiAddr, dsa.maxValue, account, 0, 0]
    })

    const calldata = await dsa.encodeCastABI(spells)
    expect(calldata).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()
  })

  it('Swap 1 ETH to USDC #3', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Cast with fluid api', async () => {
    const txHash = await dsa
      .Spell()
      .add({
        connector: 'basic',
        method: 'withdraw',
        args: [usdcAddr, dsa.maxVal(), account, 0, 0]
      })
      .cast({ from: account })

    expect(txHash).toBeDefined()
  })

  it('get transaction count', async () => {
    const nonce = await dsa.transaction.getTransactionCount(account as string)

    expect(nonce).toBeDefined()
  })

  it('Swap 1 ETH to USDC #4', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Transfer -1 USDC from DSA', async () => {
    const data = {
      token: usdcAddr,
      amount: dsa.maxValue,
      to: account
    }
    await dsa.erc20.transfer(data)
  })

  it('Transfer -1 USDC to DSA', async () => {
    const data = {
      token: usdcAddr,
      amount: dsa.maxValue,
      to: dsa.instance.address
    }
    await dsa.erc20.transfer(data)
  })

  it('Give -1 DAI allowance', async () => {
    const data = {
      token: daiAddr,
      amount: dsa.maxValue,
      to: dsa.instance.address
    }
    await dsa.erc20.approve(data)
  })
})

describe('DSA v2', function () {
  it('create new dsa v2', async () => {
    let dsaAccounts = await dsa.accounts.getAccounts(account)
    const accountCount = dsaAccounts.length

    console.log(dsaAccounts)
    await dsa.build({ version: 2 })

    dsaAccounts = await dsa.accounts.getAccounts(account)
    expect(dsaAccounts.length).toEqual(accountCount + 1)

    const createdDSA = dsaAccounts[dsaAccounts.length - 1]

    await dsa.setAccount(createdDSA.id)
    expect(dsa.instance.id).toEqual(createdDSA.id)
    expect(dsa.instance.version).toEqual(2)
  })

  it('Deposit 10 ETH to DSA', async () => {
    const amt = utils.parseUnits('10', 'ether')
    const data = {
      token: ethAddr,
      amount: amt.toString(),
      to: dsa.instance.address,
      from: account
    }
    await dsa.erc20.transfer(data)

    const balance = await web3.getBalance(dsa.instance.address)

    expect(balance).toEqual(amt)
  })

  it('Swap 1 ETH to USDC', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it("Swap 1 ETH to USDC (Spell: '1INCH-A')", async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: '1INCH-A',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, '0x7c025200000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d8540626000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001800000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d854062600000000000000000000000003d70891b8994feb6cca7022b25c32be92ee37250000000000000000000000000000000000000000000000056bc75e2d6310000000000000000000000000000000000000000000000000000000850b3a236345e100000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064eb5625d90000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000049a029498cd35de8196863c496723816d6f14980000000000000000000000000000000000000000000000056bc75e2d6310000000000000000000000000000000000000000000000000000000000000800000000000000000000000049a029498cd35de8196863c496723816d6f149800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a48201aa3f0000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000164b3af37c000000000000000000000000000000000000000000000000000000000000000808000000000000000000000000000000000000000000000000000000000000004000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000005000000000000000000000000000000050000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000242e1a7d4d00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a4b3af37c000000000000000000000000000000000000000000000000000000000000000808000000000000000000000000000000000000000000000000000000000000044000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000003d70891b8994feb6cca7022b25c32be92ee372500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 0]
    })

    try {
      await spells.estimateCastGas({ from: account })
    } catch (e: any) {
      // expect(e.message).toBe('Returned error: VM Exception while processing transaction: revert 1Inch-swap-failed')
      expect(e.message).toContain('cannot estimate gas; transaction may fail or may require manual gas limit')
    }

    try {
      await spells.cast({ from: account })
    } catch (e: any) {
      expect(e.message).toContain('cannot estimate gas; transaction may fail or may require manual gas limit')
      // expect(e.message).toBe('Returned error: VM Exception while processing transaction: revert 1Inch-swap-failed')
    }
  })

  it("Swap 1 ETH to USDC (Spell: '1INCH-A')", async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'oneInch',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, '0x7c025200000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d8540626000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001800000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d854062600000000000000000000000003d70891b8994feb6cca7022b25c32be92ee37250000000000000000000000000000000000000000000000056bc75e2d6310000000000000000000000000000000000000000000000000000000850b3a236345e100000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064eb5625d90000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000049a029498cd35de8196863c496723816d6f14980000000000000000000000000000000000000000000000056bc75e2d6310000000000000000000000000000000000000000000000000000000000000800000000000000000000000049a029498cd35de8196863c496723816d6f149800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a48201aa3f0000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000001ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000164b3af37c000000000000000000000000000000000000000000000000000000000000000808000000000000000000000000000000000000000000000000000000000000004000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000005000000000000000000000000000000050000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000242e1a7d4d00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a4b3af37c000000000000000000000000000000000000000000000000000000000000000808000000000000000000000000000000000000000000000000000000000000044000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000003d70891b8994feb6cca7022b25c32be92ee372500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 0]
    })

    try {
      await spells.estimateCastGas({ from: account })
    } catch (e: any) {
      // expect(e.message).toBe('Returned error: VM Exception while processing transaction: revert 1Inch-swap-failed')
      expect(e.message).toContain('cannot estimate gas; transaction may fail or may require manual gas limit')
    }

    try {
      await spells.cast({ from: account })
    } catch (e: any) {
      console.log('EADD', e.message)
      // expect(e.message).toBe('Returned error: VM Exception while processing transaction: revert 1Inch-swap-failed')
      expect(e.message).toContain('cannot estimate gas; transaction may fail or may require manual gas limit')
    }
  })

  it('Withdraw USDC from DSA', async () => {
    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'withdraw',
      args: [usdcAddr, dsa.maxValue, account, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Give USDC allowance', async () => {
    const data = {
      token: usdcAddr,
      amount: '1000000000000',
      to: dsa.instance.address
    }
    await dsa.erc20.approve(data)

    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'deposit',
      args: [usdcAddr, dsa.maxValue, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Swap 1 ETH to USDC #2', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Cast with flashloan', async () => {
    const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'withdraw',
      args: [usdcAddress, 0, account, 0, 0]
    })

    spells.add({
      connector: 'instapool_v2',
      method: 'flashBorrow',
      args: [usdcAddress, '10000000', 0]
    })
    spells.add({
      connector: 'instapool_v2',
      method: 'flashPayback',
      args: [usdcAddress, '10000000', 0, 0]
    })

    const calldata = await dsa.encodeCastABI(spells)
    expect(calldata).toBeDefined()

    const txHash = await dsa.cast({ spells, from: account })
    expect(txHash).toBeDefined()
  })

  it('Deposit ETH to Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'COMPOUND-A',
      method: 'deposit',
      args: ['ETH-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Borrow DAI from Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('10', 'ether')
    spells.add({
      connector: 'compound',
      method: 'borrow',
      args: ['DAI-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Payback DAI to Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('10', 'ether')
    spells.add({
      connector: 'compound',
      method: 'payback',
      args: ['DAI-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Withdraw ETH from Compound', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('0.9', 'ether')
    spells.add({
      connector: 'compound',
      method: 'withdraw',
      args: ['ETH-A', amt.toString(), 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Swap 1 ETH to DAI', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [daiAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Deposit ETH, Borrow DAI, Payback DAI, Withdraw ETH', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    const amt2 = utils.parseUnits('100', 'ether')
    spells.add({
      connector: 'compound',
      method: 'deposit',
      args: ['ETH-A', amt.toString(), 0, 0]
    })
    spells.add({
      connector: 'COMPOUND-A',
      method: 'borrow',
      args: ['DAI-A', amt2.toString(), 0, 0]
    })
    spells.add({
      connector: 'COMPOUND-A',
      method: 'payback',
      args: ['DAI-A', dsa.maxValue, 0, 0]
    })
    spells.add({
      connector: 'compound',
      method: 'withdraw',
      args: ['ETH-A', dsa.maxValue, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Object-oriented Spells', async () => {
    const spells = dsa.Spell()

    spells.add({
      connector: 'basic',
      method: 'withdraw',
      args: [daiAddr, dsa.maxValue, account, 0, 0]
    })

    const calldata = await dsa.encodeCastABI(spells)
    expect(calldata).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()
  })

  it('Swap 1 ETH to USDC #3', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Cast with fluid api', async () => {
    const txHash = await dsa
      .Spell()
      .add({
        connector: 'basic',
        method: 'withdraw',
        args: [usdcAddr, dsa.maxVal(), account, 0, 0]
      })
      .cast({ from: account })

    expect(txHash).toBeDefined()
  })

  it('get transaction count', async () => {
    const nonce = await dsa.transaction.getTransactionCount(account as string)

    expect(nonce).toBeDefined()
  })

  it('Swap 1 ETH to USDC #4', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const gas = await spells.estimateCastGas({ from: account })
    expect(gas).toBeDefined()

    const txHash = await spells.cast({ from: account })
    expect(txHash).toBeDefined()
  })

  it('Transfer -1 USDC from DSA', async () => {
    const data = {
      token: usdcAddr,
      amount: dsa.maxValue,
      to: account
    }
    await dsa.erc20.transfer(data)
  })

  it('Transfer -1 USDC to DSA', async () => {
    const data = {
      token: usdcAddr,
      amount: dsa.maxValue,
      to: dsa.instance.address
    }
    await dsa.erc20.transfer(data)
  })

  it('Give -1 DAI allowance', async () => {
    const data = {
      token: daiAddr,
      amount: dsa.maxValue,
      to: dsa.instance.address
    }
    await dsa.erc20.approve(data)
  })
})

describe('Transaction', function () {
  it('Should notify on receipt', async () => {
    const spells = dsa.Spell()
    const amt = utils.parseUnits('1', 'ether')
    spells.add({
      connector: 'uniswap',
      method: 'sell',
      args: [usdcAddr, ethAddr, amt.toString(), 0, 0, 0]
    })

    const mockOnReceiptCallback = vi.fn()

    const txHash = await spells.cast({ from: account, onReceipt: mockOnReceiptCallback })
    expect(txHash).toBeDefined()
    await waitForExpect(() => {
      expect(mockOnReceiptCallback).toBeCalled()
      // Check that the receipt was received
      expect(mockOnReceiptCallback.mock.calls[0][0]).toBeDefined()
    })
  })
})
