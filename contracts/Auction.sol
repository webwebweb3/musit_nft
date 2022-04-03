//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;


contract Auction{
    address payable public immutable owner;
    uint256 public startBlock; // 경매 시작 시간
    uint256 public endBlock;   // 종료 시간
    uint256 public tokenID;    // 토큰 ID

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

    uint256 bidIncrement;

    constructor(address _eoa, uint256 _bidIncrement, uint256 _startBlock, uint256 _endBlock, uint256 _tokenID) {
        require(_startBlock < _endBlock);
        // require(_startBlock >= block.number);
        
        owner = payable(_eoa); 
        auctionState = State.Running;
        bidIncrement = _bidIncrement;
        startBlock = _startBlock;
        endBlock = _endBlock;
        tokenID = _tokenID;
    }

    // 제한 상황
    // 1. 소유자가 가격을 인위적으로 올릴 수 있기 떄문에 소유자는 입찰할 수 없음
    // 2. 경매가 시작 블록과 끝 블록 사이에서만 실행됨
    modifier notOwner() {
        require(msg.sender != owner);
        _;
    }

    modifier afterStart() {
        require(block.number >= startBlock);
        _;
    }

    modifier berforeEnd() {
        require(block.number <= endBlock);
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function min(uint256 a, uint256 b) pure internal returns(uint256){
        if(a <= b) {
            return a;
        } else {
            return b;
        }
    }

    function cancelAuction() public onlyOwner {
        auctionState = State.Canceled;
    }

    function placeBid() public payable notOwner afterStart berforeEnd{
        require(auctionState == State.Running);
        require(msg.value != 0);

        uint256 currentBid = bids[msg.sender] + msg.value;
        require(currentBid > highestBindingBid);
        bids[msg.sender] = currentBid;

        if(currentBid <= bids[highestBidder]) {
            highestBindingBid = min(currentBid + bidIncrement, bids[highestBidder]);
        } else {
            highestBindingBid = min(currentBid, bids[highestBidder] + bidIncrement);
            highestBidder = payable(msg.sender);
        }
    }

    function finalizeAuction() public {
        require(auctionState == State.Canceled || block.number > endBlock);
        require(msg.sender == owner || bids[msg.sender] > 0);

        address payable recipient;
        uint256 value;

        // 경매 종료의 2가지 경우
        // 1. 경매는 취소되고 모든 사람들이 그들이 보낸 모든 돈을 요철하거나 받을 수 있다.
        // 2. 경매가 종료되고 경매의 소유자가 가장 높은 입찰가를 받는다.

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
                    value = bids[highestBidder] - highestBindingBid;
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