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

    event MyAuctionHistory (address indexed myAddress, uint256 indexed tokenId, uint256 myBid);
    event IsAuctionNFT (address indexed myAddress, uint256 indexed tokenId);
    event CancelAuctionNFT (address indexed myAddress, uint256 indexed tokenId);
    event FinishAuctionNFT (address indexed seller, address indexed buyer, uint256 indexed tokenId, uint256 price, uint256 timeStamp);

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
        owner = payable(_eoa); 
        auctionState = State.Running;
        highestBindingBid = _startingBid;
        startAt = uint32(block.timestamp);
        endAt = uint32(_endAt);
        minimumBid = _minimumBid;
        tokenID = _tokenID;
        mintMusicTokenAddress = _mintMusicTokenAddress;
        emit IsAuctionNFT(_eoa,_tokenID);
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
        runningState
    {
        auctionState = State.Canceled;
        emit CancelAuctionNFT(owner, tokenID);
        mintMusicTokenAddress.setTokenState(tokenID, false);
        // NFT 반환
    }

    function getMyMoney()
        public
        notOwner
        runningState
    {
        require(msg.sender != highestBidder, "You are highest bidder. Can not get your money.");
        address payable recipient;
        uint256 value;
        recipient = payable(msg.sender);
        value = bids[msg.sender];
        bids[recipient] = 0;
        recipient.transfer(value);

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
                auctionState = State.Ended;
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
        mintMusicTokenAddress.setTokenState(tokenID, false);
        emit FinishAuctionNFT(owner,recipient,tokenID,value,block.timestamp);
        bids[recipient] = 0;
        recipient.transfer(value);
    }
}