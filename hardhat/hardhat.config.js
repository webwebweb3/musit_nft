require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const { ALCHEMY_ROPSTEN_API_KEY } = process.env;
const { ALCHEMY_RINKEBY_API_KEY } = process.env;

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const { ROPSTEN_PRIVATE_KEY } = process.env;
const { ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.0',
      },
      {
        version: '0.8.1',
        settings: {},
      },
    ],
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_ROPSTEN_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_RINKEBY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
