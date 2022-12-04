require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com" || '',
      accounts:
        process.env.REACT_APP_PRIVATE_KEY !== undefined ? [process.env.REACT_APP_PRIVATE_KEY] : [],
    },
  },

  etherscan: {
    apiKey: process.env.REACT_APP_POLYGONSCAN_API_KEY,
  },
    solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
