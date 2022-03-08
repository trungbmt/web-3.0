require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ih5iIHdifJHfU5o9eCoEaaQzOw0RiUHs',
      accounts: ['933d5d86a0a1d8c26e90411860fc5ded32630b27d87258a380e92b5546948582'],
    },
  },
};