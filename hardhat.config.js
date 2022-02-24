require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { PRIVATE_KEY, POLYGON_URL, RINKEBY_URL } = process.env;
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
  networks: {
    hardhat: {
      gasPrice: 470000000000,
      chainId: 43112,
    },
    // rinkeby: {
    //   url: RINKEBY_URL,
    //   accounts: [PRIVATE_KEY]
    // },
    mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
