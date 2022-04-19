import { web3 } from '$contracts';
import React, { useEffect, useState } from 'react';

const GetBalance = ({ metamask }) => {
  const [balance, setBalance] = useState();
  const getMyBalance = async () => {
    const myBalance = await web3.eth.getBalance(metamask);
    const balanceToNum = parseFloat(web3.utils.fromWei(myBalance));
    setBalance(balanceToNum.toFixed(5));
  };
  useEffect(() => {
    if (!balance) getMyBalance();
  }, [balance]);
  return (
    <div style={{ fontSize: '15px', color: '#9e9fa3', fontWeight: 600 }}>
      내 잔액 {balance && balance} ETH
    </div>
  );
};

export default GetBalance;
