import { web3 } from '$contracts';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const GetBalance = ({ metamask }) => {
  const { t, i18n } = useTranslation();
  const [balance, setBalance] = useState();
  const { userData } = useSelector(state => state.user);
  const getMyBalance = async () => {
    const myBalance = await web3.eth.getBalance(metamask);
    const balanceToNum = parseFloat(web3.utils.fromWei(myBalance));
    setBalance(balanceToNum.toFixed(5));
  };
  useEffect(() => {
    getMyBalance();
  }, [balance, userData.metamask]);
  return (
    <div style={{ fontSize: '15px', color: '#9e9fa3', fontWeight: 600 }}>
      {t('myBalance')} {balance && balance} ETH
    </div>
  );
};

export default GetBalance;
