import Web3 from 'web3';
import Auction from './web3/Auction.json';
import AuctionCreator from './web3/AuctionCreator.json';
import MintMusicToken from './web3/MintMusicToken.json';
import Payment from './web3/Payment.json';
import SaleMusicToken from './web3/SaleMusicToken.json';
import Streaming from './web3/Streaming.json';

const mintMusicTokenAbi = MintMusicToken.abi;
const saleMusicTokenAbi = SaleMusicToken.abi;
const auctionCreatorAbi = AuctionCreator.abi;
export const auctionAbi = Auction.abi;
const paymentAbi = Payment.abi;
const streamingAbi = Streaming.abi;

export const mintMusicTokenAddress = MintMusicToken.contractAddress;
export const saleMusicTokenAddress = SaleMusicToken.contractAddress;
export const auctionCreatorAddress = AuctionCreator.contractAddress;
export const paymentAddress = Payment.contractAddress;
export const streamingAddress = Streaming.contractAddress;

let web3;
let mintMusicTokenContract;
let saleMusicTokenContract;
let auctionCreatorContract;
let paymentContract;
let streamingContract;

if (typeof window !== 'undefined') {
  web3 = new Web3(window.ethereum);
  mintMusicTokenContract = new web3.eth.Contract(
    mintMusicTokenAbi,
    mintMusicTokenAddress,
  );

  saleMusicTokenContract = new web3.eth.Contract(
    saleMusicTokenAbi,
    saleMusicTokenAddress,
  );

  auctionCreatorContract = new web3.eth.Contract(
    auctionCreatorAbi,
    auctionCreatorAddress,
  );

  paymentContract = new web3.eth.Contract(paymentAbi, paymentAddress);

  streamingContract = new web3.eth.Contract(streamingAbi, streamingAddress);
}

export {
  web3,
  mintMusicTokenContract,
  saleMusicTokenContract,
  auctionCreatorContract,
  paymentContract,
  streamingContract,
};
