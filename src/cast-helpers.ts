/* eslint-disable no-useless-constructor */
// import { TransactionRequest } from 'web3-core'
import { TransactionRequest } from '@ethersproject/abstract-provider'
import { utils } from 'ethers'
// import { Contract } from '@ethersproject/contracts'
import { Spells } from './spells'
import { wrapIfSpells } from './utils'
import { DSA, Abi, Addresses } from '.'

type EncodeAbiParams = {
  spells: Spells
  origin?: string
} & Pick<TransactionRequest, 'to'>

export class CastHelpers {
  constructor (private dsa: DSA) {}

  /**
   * Returns the estimated gas cost.
   *
   * @param params.from the from address
   * @param params.to the to address
   * @param params.value eth value
   * @param params.spells cast spells
   */
  estimateGas = async (
    params: { spells: Spells } & Pick<TransactionRequest, 'from' | 'to' | 'value'>
  ) => {
    const to = params.to ?? this.dsa.instance.address

    if (to === Addresses.genesis) {
      throw new Error(
        'Please configure the DSA instance by calling dsa.setInstance(dsaId). More details: https://docs.instadapp.io/setup'
      )
    }

    const { targets, spells } = this.dsa.internal.encodeSpells(params)
    const args = [targets, spells, this.dsa.origin]
    let from = params.from
    if (!from) {
      const fromFetch = await this.dsa.internal.getAddress()
      from = fromFetch || ''
    }

    const value = params.value ?? '0'

    const abi = this.dsa.internal.getInterface(Abi.core.versions[this.dsa.instance.version].account as any[], 'cast')

    if (!abi) { throw new Error('Abi is not defined.') }

    const estimatedGas = await this.dsa.internal.estimateGas({ abi, to, from, value, args })

    return estimatedGas
  }

  /**
   * Returns the encoded cast ABI byte code to send via a transaction or call.
   *
   * @param params.spells The spells instance
   * @param params.to (optional) the address of the smart contract to call
   * @param params.origin (optional) the transaction origin source
   */
  encodeABI = (params: Spells | EncodeAbiParams) => {
    const defaults = {
      to: this.dsa.instance.address,
      origin: this.dsa.origin
    }
    const mergedParams = Object.assign(defaults, wrapIfSpells(params)) as EncodeAbiParams

    if (mergedParams.to === Addresses.genesis) {
      throw new Error(
        'Please configure the DSA instance by calling dsa.setInstance(dsaId). More details: https://docs.instadapp.io/setup'
      )
    }

    // const contract = new Contract(mergedParams.to as string, Abi.core.versions[this.dsa.instance.version].account, this.dsa.config.provider.getSigner())

    const { targets, spells } = this.dsa.internal.encodeSpells(mergedParams.spells)
    // TODO @thrilok: check about return type.

    const ABI = this.dsa.internal.getInterface(Abi.core.versions[this.dsa.instance.version].account as any, 'cast')
    const iface = new utils.Interface([ABI])
    const encodedAbi: string = iface.encodeFunctionData(ABI.name, [targets, spells, mergedParams.origin])
    // const encodedAbi: string = contract.methods.cast(targets, spells, mergedParams.origin).encodeABI()
    return encodedAbi
  }

  flashBorrowSpellsConvert = (params: Spells): Spells => {
    const arr = params.data
    const spellsLength = arr.length
    // const spells = this.dsa.Spell()
    const spells = new Spells(this.dsa)
    const flashBorrowArgs = []
    let spells2 = new Spells(this.dsa)
    let isFlashloanPool = false
    for (let i = 0; i < spellsLength; i++) {
      const a = arr[i]
      if (a.connector === 'instapool_v2' && a.method === 'flashBorrow' && !isFlashloanPool) {
        isFlashloanPool = true
        flashBorrowArgs.push(...a.args)
        continue
      }

      if (a.connector === 'instapool_v2' && a.method === 'flashBorrow' && isFlashloanPool) {
        // const subSpells = this.dsa.Spell()
        const subSpells = new Spells(this.dsa)
        arr.slice(i, spellsLength).forEach(b => subSpells.add(b))

        const encodedFlashloanSpells = this.flashBorrowSpellsConvert(subSpells)
        i = spellsLength - encodedFlashloanSpells.data.length - 2

        spells2.add(encodedFlashloanSpells.data[0])
        continue
      }

      if (a.connector === 'instapool_v2' && a.method === 'flashPayback' && isFlashloanPool) {
        isFlashloanPool = false
        spells2.add(a)
        const encodedSpells = this.dsa.instapool_v2.encodeFlashCastData(spells2)

        spells.add({
          connector: 'instapool_v2',
          method: 'flashBorrowAndCast',
          args: [...flashBorrowArgs, encodedSpells]
        })

        spells2 = new Spells(this.dsa)
        // spells2 = this.dsa.Spell()
        continue
      }

      isFlashloanPool ? spells2.add(a) : spells.add(a)
    }
    return spells
  }
}
