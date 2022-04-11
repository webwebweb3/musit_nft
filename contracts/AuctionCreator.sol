//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "./MintMusicToken.sol";
import { Auction } from './Auction.sol';

contract AuctionCreator{
    uint256 public tokenID;    // 토큰 ID
    MintMusicToken public mintMusicTokenAddress;

    Auction[] public auctions;

    // 사용자가 Create 호출할 때 이 계약의 옥션 가능
    function createAuction(uint256 _startingBid, uint256 _endAt, uint256 _tokenID) public {
        Auction newAuction = new Auction(msg.sender, _startingBid, _endAt, _tokenID);
        auctions.push(newAuction);
    }

    function allAuctions() public view returns (Auction[] memory) {
        return auctions;
    }
    
    function getTokenURI()
        public
        view
    {
        mintMusicTokenAddress.tokenURI(tokenID);
    }
}

