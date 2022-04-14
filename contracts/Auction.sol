//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "./MintMusicToken.sol";

contract Auction{
    address payable public immutable owner;
    uint256 public startAt; // 경매 시작 시간
    uint256 public endAt;   // 종료 시간
    uint256 public tokenID;    // 토큰 ID
    uint256 public highestBindingBid; // 최고가
    address payable public highestBidder; // 최고가 올린 owner
    uint256 public minimumBid; // 최소 입찰가
    address public thisContractAddress;

    MintMusicToken public mintMusicTokenAddress;

    event MyAuctionHistory (address indexed myAddress, uint256 tokenId, uint256 myBid);

    enum State {
        Started,
        Running,
        Ended,
        Canceled
    }
    State public auctionState;

    mapping(address => uint256) public bids;

    address[] public testData;

    constructor(address _eoa, uint256 _startingBid, uint256 _endAt, uint256 _tokenID, uint256 _minimumBid, MintMusicToken _mintMusicTokenAddress) {
        require(block.timestamp <= _endAt, "End time is shorter than now");
        require(_startingBid > 0, "Auction start value is not set.");
        require(_minimumBid > 0, "We haven't set a minimum bid price.");
        // require(_startAt < _endAt);
        // require(_startAt >= block.number);
        owner = payable(_eoa); 
        auctionState = State.Running;
        highestBindingBid = _startingBid;
        startAt = uint32(block.timestamp);
        endAt = uint32(_endAt);
        minimumBid = _minimumBid;
        tokenID = _tokenID;
        mintMusicTokenAddress = _mintMusicTokenAddress;
        thisContractAddress = address(this);
    }

    modifier notOwner() {
        require(msg.sender != owner, "Sender is owner.");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Sender is not owner.");
        _;
    }    

    modifier isApproved() {        
        require(mintMusicTokenAddress.isApprovedForAll(owner,address(this))==true, "Owner did not approve this auction.");
        _;
    }

    modifier beforeRunning() {
        require(startAt < endAt, "Start time is bigger than end time.");
        require(auctionState == State.Started, "Auction state is not Started state.");
        require(block.timestamp <= endAt, "End time is shorter than now");
        require(highestBindingBid > 0, "Auction start value is not set.");
        require(minimumBid > 0, "We haven't set a minimum bid price.");
        _;
    }

    modifier runningState() {
        require(auctionState == State.Running, "Auction state is not Running state.");
        require(block.timestamp <= endAt, "The bidding for the auction is over.");
        _;
    }

    modifier afterRunning() {
        if(block.timestamp >= endAt){
            auctionState == State.Ended;
        }
        require(auctionState == State.Ended || auctionState == State.Canceled, "The auction is over.");
        _;
    }

    // function auctionStart() 
    //     public
    //     onlyOwner
    //     beforeRunning
    // {
    //     (bool success, ) = address(mintMusicTokenAddress).delegatecall(abi.encodeWithSignature("setApprovalForAll(address, bool)",thisContractAddress, true));
    //     // mintMusicTokenAddress.setApprovalForAll.(msg.sender,thisContractAddress, true);
    //     if(success){
    //         auctionState = State.Running;
    //     }
    // }

    function placeBid() 
        public 
        payable 
        notOwner 
        runningState
        isApproved
    {
        require(msg.value >= minimumBid, "Your bid is lower than minimumBid");
        uint256 currentBid = bids[msg.sender] + msg.value; // first bidder's bids[msg.sender] == 0
        require(currentBid > highestBindingBid, "current bid < highest bid");
        bids[msg.sender] = currentBid;
        highestBindingBid = currentBid;
        emit MyAuctionHistory(msg.sender,tokenID,currentBid);
        highestBidder = payable(msg.sender);
    }

    function cancelAuction() 
        public 
        onlyOwner 
        afterRunning
    {
        auctionState = State.Canceled;
        // NFT 반환
    }

    function finalizeAuction() 
        public 
        isApproved
    {
        require(block.timestamp >= endAt, "Auction is now running.");
        require(msg.sender == owner || bids[msg.sender] > 0, "");

        address payable recipient;
        uint256 value;

        if(auctionState == State.Canceled) {
            recipient = payable(msg.sender);
            value = bids[msg.sender];
        } else {
            if(msg.sender == owner) {
                recipient = owner;
                value = highestBindingBid;
            } else {
                if(msg.sender == highestBidder) { 
                    recipient = highestBidder;
                    mintMusicTokenAddress.safeTransferFrom(owner, recipient, tokenID);
                } else {
                    recipient = payable(msg.sender);
                    value = bids[msg.sender];
                }
            }
        }

        bids[recipient] = 0;
        recipient.transfer(value);
    }
}