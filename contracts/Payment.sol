// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Payment {
    uint public nextPlanId;

    struct Plan {
        address merchant;
        // address token; 
        uint amount;
        uint frequency; // 28days 2419200 29days 2505600 30days 2592000 31days 2678400
    }

    struct Subscription {
        address subscriber;
        uint start;
        uint nextPayment;
        bool isSubscribe;
    }

    mapping(uint => Plan) public plans;
    mapping(address => mapping(uint => Subscription)) public subscriptions;

    event PlanCreated(address indexed merchant, uint indexed planId, uint date);
    event SubscriptionCreated(address indexed subscriber, uint indexed planId, uint date);
    event SubscriptionCancelled(address indexed subscriber, uint indexed planId, uint date);
    event PaymentSent(address indexed from, address to, uint amount, uint indexed planId, uint date);

    function createPlan(uint amount, uint frequency) 
        external 
    {
        // require(token != address(0), "address cannot be null address");
        require(amount > 0, "amount needs to be > 0");
        require(frequency > 0, "frequency needs to be > 0");
        plans[nextPlanId] = Plan(msg.sender, amount, frequency);
        nextPlanId++;
    }

    function subscribe(uint planId)
         external 
         payable
    {
        // IERC20 token = IERC20(plans[planId].token);
        Plan storage plan = plans[planId];
        require(plan.merchant != address(0), "this plan does not exist");

        // token.transferFrom(msg.sender, plan.merchant, plan.amount);  
        payable(plan.merchant).transfer(plan.amount);
        emit PaymentSent(msg.sender, plan.merchant, plan.amount, planId, block.timestamp);

        subscriptions[msg.sender][planId] = Subscription(msg.sender, block.timestamp, block.timestamp + plan.frequency, true);
        emit SubscriptionCreated(msg.sender, planId, block.timestamp + plan.frequency);
    }

    function cancel(uint planId) 
        external 
    {
        Subscription storage subscription = subscriptions[msg.sender][planId];
        require(subscription.subscriber != address(0), "this subscription does not exist");
        subscription.isSubscribe = false;
        emit SubscriptionCancelled(msg.sender, planId, block.timestamp);
    }

    function pay(uint planId) 
        external 
        payable
    {
        Subscription storage subscription = subscriptions[msg.sender][planId];
        Plan storage plan = plans[planId];
        // IERC20 token ;
        require(subscription.subscriber != address(0), "this subscription does not exist");
        require(block.timestamp > subscription.nextPayment, "not due yet");
        // token.transferFrom(subscriber,plan.merchant, msg.value);
        payable(plan.merchant).transfer(msg.value);
        // token.transferFrom(subscriber, plan.merchant, plan.amount);  
        // payable(plan.merchant).transfer
        emit PaymentSent(msg.sender, plan.merchant, plan.amount, planId, block.timestamp + plan.frequency);
        subscription.nextPayment = subscription.nextPayment + plan.frequency;
    }
}