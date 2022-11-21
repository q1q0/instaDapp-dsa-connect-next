/* eslint-disable no-console */
/* eslint-disable quotes */
import { HardhatUserConfig, task } from "hardhat/config"
import * as dotenv from 'dotenv'
import '@nomiclabs/hardhat-ethers'

dotenv.config()

task('accounts', 'Prints accounts', async (_, hre) => {
  await hre.network.provider.request({
    method: 'hardhat_impersonateAccount',
    params: [process.env.PUBLIC_ADDRESS]
  })
  console.info(await hre.ethers.getSigners())
  await hre.network.provider.send("eth_sendTransaction", [{ from: process.env.PUBLIC_ADDRESS, to: process.env.PUBLIC_ADDRESS, value: 1000 }])
})

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ETH_NODE_URL as string
      },
      blockGasLimit: 12000000
    }
  }
}

export default config
