/* eslint-disable require-await */
/* eslint-disable no-useless-constructor */
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { Abi } from './abi'
import { Addresses } from './addresses'
import { DSA } from './dsa'

export class Accounts {
  constructor (private dsa: DSA) {}

  /**
   * Global number of DSAs.
   */
  count = async () => {
    const contract = new Contract(Addresses.core[this.dsa.instance.chainId].list, Abi.core.list, this.dsa.provider.getSigner())
    const count = await contract.accounts()
    // const count = await contract.methods.accounts().call({ from: Addresses.genesis })

    return count
  }

  /**
   * Returns accounts in a simple array of objects for addresses owned by the address.
   *
   * @param authority The ethereum address or .eth name
   */
  getAccounts = async (authority: string) => {
    const address = await this.getAuthorityAddress(authority)
    const contract = new Contract(Addresses.core[this.dsa.instance.chainId].read, Abi.core.read, this.dsa.provider.getSigner())

    // TODO: Check if type is correct here (string/number?)
    // const authorityDetails: {
    //   IDs: number[]
    //   accounts: string[]
    //   versions: number[]
    // } = await contract.methods.getAuthorityDetails(address).call({ from: Addresses.genesis })

    const authorityDetails: {
      IDs: number[]
      accounts: string[]
      versions: number[]
    } = await contract.getAuthorityDetails(address)

    const accounts = authorityDetails.IDs.map((id, index) => ({
      id,
      address: authorityDetails.accounts[index],
      version: authorityDetails.versions[index]
    }))

    return accounts
  }

  private getAuthorityAddress = async (authority: string) => {
    if (!authority) { return await this.dsa.internal.getAddress() }

    // if (authority.includes('.eth')) { return await this.dsa.web3.eth.ens.getAddress(authority) }
    if (authority.includes('.eth')) { return utils.getAddress(authority) }

    return authority
  }

  /**
   * Returns accounts in a simple array of objects.
   *
   * @param id The DSA ID.
   */
  getAuthoritiesById = async (id: number) => {
    const contract = new Contract(Addresses.core[this.dsa.instance.chainId].read, Abi.core.read, this.dsa.provider.getSigner())

    // TODO: Return type instead of any?
    const authorities: any = await contract.getIDAuthorities(id)
    // const authorities: any = await contract.methods.getIDAuthorities(id).call({ from: Addresses.genesis })

    return authorities
  }

  /**
   * Returns accounts in a simple array of objects.
   *
   * @param address The DSA address
   */
  private getAuthoritiesByAddress = async (address: string) => {
    const contract = new Contract(Addresses.core[this.dsa.instance.chainId].read, Abi.core.read, this.dsa.provider.getSigner())

    // TODO: Return type instead of any?
    const authorities: any = await contract.getAccountAuthorities(address)
    // const authorities: any = await contract.methods.getAccountAuthorities(address).call({ from: Addresses.genesis })

    return authorities
  }

  /**
   * Returns authorities with its type in a simple array of objects.
   *
   * @param address The DSA address.
   */
  private getAuthoritiesTypes = async (address: string) => {
    const contract = new Contract(Addresses.core[this.dsa.instance.chainId].read, Abi.core.read, this.dsa.provider.getSigner())

    // TODO: Return type instead of any?
    const authorities: any = contract.getAccountAuthoritiesTypes(address)
    // const authorities: any = contract.methods.getAccountAuthoritiesTypes(address).call({ from: Addresses.genesis })

    return authorities
  }
}
