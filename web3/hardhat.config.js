/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
