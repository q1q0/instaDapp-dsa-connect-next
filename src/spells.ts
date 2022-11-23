import { CastHelpers } from './cast-helpers'
import { CastParams, DSA } from './dsa'
import { Connector, Internal } from './internal'

export type Spell = {
  /**
   * The from address.
   */
  connector: Connector

  /**
   * The to address.
   */
  method: string

  /**
   * The ABI interface.
   */
  args: any[]
}

export class Spells {
  constructor (private dsa: DSA) { }
  data: Spell[] = []

  add (spell: Spell) {
    if (!spell.connector) {
      throw new Error('connector not defined.')
    }

    if (!spell.method) {
      throw new Error('method not defined.')
    }

    if (!spell.args) {
      throw new Error('args not defined.')
    }

    this.data.push(spell)

    return this
  }

  cast = async (params?: Omit<CastParams, 'spells'>) => {
    if (!this.data.length) {
      console.log('No spells casted. Add spells with `.add(...)`.')
      return
    }
    return await this.dsa.cast(!!params ? { ...params, spells: this } : this)
  }

  estimateCastGas = async (params?: Omit<CastHelpers['estimateGas'], 'spells'>) => {
    if (!this.data.length) {
      console.log('No spells casted. Add spells with `.add(...)`.')
      return
    }
    return await this.dsa.castHelpers.estimateGas({ spells: this, ...params })
  }

  encodeCastABI = async (params?: Omit<CastHelpers['encodeABI'], 'spells'>) => {
    if (!this.data.length) {
      console.log('No spells casted. Add spells with `.add(...)`.')
      return
    }
    return await this.dsa.encodeCastABI({ spells: this, ...params })
  }

  encodeSpells = async (params?: Omit<Internal['encodeSpells'], 'spells'>) => {
    if (!this.data.length) {
      console.log('No spells casted. Add spells with `.add(...)`.')
      return
    }
    return await this.dsa.encodeSpells({ spells: this, ...params })
  }
}
