//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "./MintMusicToken.sol";
import { Auction } from "./Auction.sol";

contract AuctionCreator{
    MintMusicToken public mintMusicTokenAddress;

    AuctionInformation[] public auctions;

    struct AuctionInformation {
        uint256 tokenId;
        address msgSender;
        Auction newAuctionContract;
    }

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
        require(mintMusicTokenAddress.getIsOnSale(_tokenID)==false, "This token is on sale.");
        require(block.timestamp <= _endAt);
        require(_startingBid > 0);
        require(_minimumBid > 0);
        address tokenOwner = mintMusicTokenAddress.ownerOf(_tokenID);
        require(msg.sender == tokenOwner, "This user is not token Owner.");
        Auction newAuction = new Auction(msg.sender, _startingBid, _endAt, _tokenID, _minimumBid, mintMusicTokenAddress);
        mintMusicTokenAddress.setTokenState(_tokenID, true);
        auctions.push(AuctionInformation(_tokenID, msg.sender,newAuction));
    }

    function allAuctions() 
        public 
        view 
        returns (AuctionInformation[] memory) 
    {
        return auctions;
    }

    function getMyAuctions(address _myAddress)
        view
        public
        returns(AuctionInformation[] memory)
    {
        uint256 j = 0;
        uint256 k = 0;
        for (uint256 i = 0; i < auctions.length; i++){
            if(auctions[i].msgSender == _myAddress){
                j++;
            }
        }
        AuctionInformation[] memory auctionData = new AuctionInformation[](j);
        for (uint256 i = 0; i < auctions.length; i++){
            if(auctions[i].msgSender == _myAddress){
                uint256 tokenId = auctions[i].tokenId;
                Auction myAuctionContract = auctions[i].newAuctionContract;
                auctionData[k] = AuctionInformation(tokenId, _myAddress, myAuctionContract);
                k++;
            }
        }
        return auctionData;
    }
}