
//https://eth-ropsten.alchemyapi.io/v2/9P-JY4juCjAsBCEAPSfje_sWkWAtRLht

require("@nomiclabs/hardhat-waffle");

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
  solidity: "0.8.0",
  networks: { ropsten:
  { url: 'https://eth-ropsten.alchemyapi.io/v2/9P-JY4juCjAsBCEAPSfje_sWkWAtRLht',
    accounts: [ 'f12bac512ee04bea68cf1c94912c3d421b0ec502ba32205d55f60e8da6985b83' ]
}}
};
