// https://eth-ropsten.alchemyapi.io/v2/zXAp1tNhMHlu6AvxS8GBTn_GymfBpsOe

require('@nomiclabs/hardhat-waffle');

module.export = {
  defaultNetwork: 'ropsten',
  
  networks: {
    hardhat:{

    } ,
      ropsten:{
        url: 'https://eth-ropsten.alchemyapi.io/v2/zXAp1tNhMHlu6AvxS8GBTn_GymfBpsOe',
      accounts:[ 'Private key' ]
      },
  },
  solidity: {
    version: "0.8.13",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}
};