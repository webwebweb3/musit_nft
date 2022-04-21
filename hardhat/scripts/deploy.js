const { artifacts, ethers } = require('hardhat');
const fs = require('fs');

function saveJsonFilesToClientFolder(name, contract) {
  const contractsDir = `${__dirname}/../../client/contracts/web3`;

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  const contractArtifact = artifacts.readArtifactSync(name);

  if (contract === undefined) {
    fs.writeFileSync(
      `${contractsDir}/${name}.json`,
      JSON.stringify({ ...contractArtifact }, undefined, 4),
    );
    return;
  }

  fs.writeFileSync(
    `${contractsDir}/${name}.json`,
    JSON.stringify(
      { contractAddress: contract.address, ...contractArtifact },
      undefined,
      4,
    ),
  );
  console.log(name, ' json is created');
}

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const MintMusicToken = await ethers.getContractFactory('MintMusicToken', {
    gasLimit: 8000000,
  });
  const mintMusicToken = await MintMusicToken.deploy();
  console.log('mintMusicToken address:', mintMusicToken.address);

  const SaleMusicToken = await ethers.getContractFactory('SaleMusicToken', {
    gasLimit: 8000000,
  });
  const saleMusicToken = await (
    await SaleMusicToken.deploy(mintMusicToken.address)
  ).deployed();
  await mintMusicToken.setSaleMusicToken(saleMusicToken.address);
  console.log('saleMusicToken address:', saleMusicToken.address);

  const AuctionCreator = await ethers.getContractFactory('AuctionCreator', {
    gasLimit: 8000000,
  });
  const auctionCreator = await AuctionCreator.deploy(mintMusicToken.address);

  console.log('auctionCreator address:', auctionCreator.address);

  const Payment = await ethers.getContractFactory('Payment', {
    gasLimit: 8000000,
  });
  const payment = await Payment.deploy();
  console.log('payment address:', payment.address);

  const Streaming = await ethers.getContractFactory('Streaming', {
    gasLimit: 8000000,
  });
  const streaming = await Streaming.deploy(mintMusicToken.address);
  console.log('streaming address:', streaming.address);

  saveJsonFilesToClientFolder('MintMusicToken', mintMusicToken);
  saveJsonFilesToClientFolder('SaleMusicToken', saleMusicToken);
  saveJsonFilesToClientFolder('AuctionCreator', auctionCreator);
  saveJsonFilesToClientFolder('Payment', payment);
  saveJsonFilesToClientFolder('Streaming', streaming);
  saveJsonFilesToClientFolder('Auction');
  console.log('done deploy');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
