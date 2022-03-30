//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import { Auction } from './Auction.sol';

contract AuctionCreator{
    Auction[] public auctions;

    // 사용자가 Create 호출할 때 이 계약의 옥션 가능
    function createAuction(uint _bidIncrement, uint _startBlock, uint _endBlock, string memory _ipfsHash) public {
        Auction newAuction = new Auction(msg.sender, _bidIncrement, _startBlock, _endBlock, _ipfsHash);
        auctions.push(newAuction);
    }

    function allAuctions() public view returns (Auction[] memory) {
        return auctions;
    }
}