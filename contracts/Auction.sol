//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;


contract Auction{
    address payable public immutable owner;
    uint256 public startAt; // 경매 시작 시간
    uint256 public endAt;   // 종료 시간
    uint256 public immutable tokenID;    // 토큰 ID

    enum State {
        Started,
        Running,
        Ended,
        Canceled
    }
    State public auctionState;

    uint256 public highestBindingBid;
    address payable public highestBidder;
    mapping(address => uint256) public bids;

    constructor(address _eoa, uint256 _startingBid, uint256 _endAt, uint256 _tokenID) {
        // require(_startAt < _endAt);
        // require(_startAt >= block.number);
        
        owner = payable(_eoa); 
        auctionState = State.Running;
        highestBindingBid = _startingBid;
        startAt = uint32(block.timestamp);
        endAt = uint32(_endAt);
        tokenID = _tokenID;
        // tokenID.transferFrom(seller, address(this), _tokenID);
    }

    modifier notOwner() {
        require(msg.sender != owner);
        _;
    }

    modifier berforeEnd() {
        require(block.timestamp <= endAt);
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function cancelAuction() public onlyOwner berforeEnd{
        auctionState = State.Canceled;
    }

    function placeBid() public payable notOwner berforeEnd{
        require(auctionState == State.Running, "not started");

        uint256 currentBid = bids[msg.sender] + msg.value;
        require(currentBid > highestBindingBid, "current bid < highest bid");
        bids[msg.sender] = currentBid;
        highestBindingBid = currentBid;
        highestBidder = payable(msg.sender);
    }

    function finalizeAuction() public {
        require(auctionState == State.Canceled || block.timestamp >= endAt);
        require(msg.sender == owner || bids[msg.sender] > 0);

        address payable recipient;
        uint256 value;

        if(auctionState == State.Canceled) {
            recipient = payable(msg.sender);
            value = bids[msg.sender];
            // NFT 반환
        } else {
            if(msg.sender == owner) {
                recipient = owner;
                value = highestBindingBid;
            } else {
                if(msg.sender == highestBidder) { 
                    recipient = highestBidder;
                    value = bids[highestBidder] - highestBindingBid;
                    // NFT 지급
                } else {
                    recipient = payable(msg.sender);
                    value = bids[msg.sender];
                }
            }
        }

        bids[recipient] = 0;
        recipient.transfer(value);
        // tokenID.transferFrom(seller, address(this), _tokenID)
    }
}