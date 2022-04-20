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

  /// ///////////////////////////////////////////////////////////////////////////
  const Payment = await ethers.getContractFactory('Payment', {
    gasLimit: 10000000,
  });
  const payment = await (await Payment.deploy()).deployed();
  console.log('payment address:', payment.address);

  /// ///////////////////////////////////////////////////////////////////////////

  /// ///////////////////////////////////////////////////////////////////////////
  const MintMusicToken = await ethers.getContractFactory('MintMusicToken', {
    gasLimit: 10000000,
  });
  const mintMusicToken = await MintMusicToken.deploy();
  console.log('mintMusicToken address:', mintMusicToken.address);
  /// ///////////////////////////////////////////////////////////////////////////

  /// ///////////////////////////////////////////////////////////////////////////
  const SaleMusicToken = await ethers.getContractFactory('SaleMusicToken', {
    gasLimit: 10000000,
  });
  const saleMusicToken = await (
    await SaleMusicToken.deploy(mintMusicToken.address)
  ).deployed();
  await mintMusicToken.setSaleMusicToken(saleMusicToken.address);
  console.log('saleMusicToken address:', saleMusicToken.address);
  /// ///////////////////////////////////////////////////////////////////////////

  /// ///////////////////////////////////////////////////////////////////////////
  const AuctionCreator = await ethers.getContractFactory('AuctionCreator', {
    gasLimit: 10000000,
  });
  const auctionCreator = await AuctionCreator.deploy(mintMusicToken.address);
  console.log('auctionCreator address:', auctionCreator.address);
  /// ///////////////////////////////////////////////////////////////////////////

  /// ///////////////////////////////////////////////////////////////////////////
  const Streaming = await ethers.getContractFactory('Streaming', {
    gasLimit: 10000000,
  });
  const streaming = await Streaming.deploy(mintMusicToken.address);
  console.log('streaming address:', streaming.address);
  /// ///////////////////////////////////////////////////////////////////////////

  await payment.createPlan('1', 7889230, 0);
  console.log('creating plan 1...');
  await payment.createPlan('100000000000000000', 2629743, 2);
  console.log('creating plan 2 ...');
  await payment.createPlan('200000000000000000', 7889230, 2);
  console.log('creating plan 3 ...');
  await payment.createPlan('300000000000000000', 15778460, 2);
  console.log('creating plan 4 ...');
  await payment.createPlan('500000000000000000', 31556926, 2);
  console.log('plan done');

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
