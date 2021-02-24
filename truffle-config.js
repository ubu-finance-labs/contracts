const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    dev: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
	bsc: {
      provider: () => new HDWalletProvider(``, `https://bsc-dataseed.binance.org/`),
      network_id: 56,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
