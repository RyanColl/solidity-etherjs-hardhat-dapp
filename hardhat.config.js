require("@nomiclabs/hardhat-waffle");
const { acc_private_key } = require('./src/creds/credentials.js')
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/ae97d6d0a331420fb601031f0df019e4",
      accounts: [`0x${'8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61'}`]
    }
  },
};
