const hre = require("hardhat");

async function main() {

  const Sashay = await hre.ethers.getContractFactory("Sashay");
  const sashay = await Sashay.deploy();

  await sashay.deployed();

  console.log("sashay deployed to:", sashay.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
