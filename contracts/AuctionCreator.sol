//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "./MintMusicToken.sol";
import { Auction } from "./Auction.sol";

contract AuctionCreator{
    uint256 public tokenID;    // 토큰 ID

    MintMusicToken public mintMusicTokenAddress;

    Auction[] public auctions;

    mapping (address => Auction) public newAuctionContract; 

    constructor (address _mintMusicTokenAddress){
        mintMusicTokenAddress = MintMusicToken(_mintMusicTokenAddress);
    }
    

    modifier notTokenOwner(address _tokenOwner, uint256 _tokenID) {
        address tokenOwner = mintMusicTokenAddress.ownerOf(_tokenID);
        require(msg.sender == tokenOwner);
        _;
    }

    // 사용자가 Create 호출할 때 이 계약의 옥션 가능
    function createAuction(uint256 _startingBid, uint256 _endAt, uint256 _tokenID, uint256 _minimumBid) 
        public 
    {
        require(block.timestamp <= _endAt);
        require(_startingBid > 0);
        require(_minimumBid > 0);
        address tokenOwner = mintMusicTokenAddress.ownerOf(_tokenID);
        require(msg.sender == tokenOwner, "This user is not token Owner.");
        Auction newAuction = new Auction(msg.sender, _startingBid, _endAt, _tokenID, _minimumBid, mintMusicTokenAddress);
        newAuctionContract[msg.sender] = newAuction;
        auctions.push(newAuction);
    }

    function allAuctions() 
        public 
        view 
        returns (Auction[] memory) 
    {
        return auctions;
    }
}