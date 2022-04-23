import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { AuctionGray, AuctionTime } from '../style';
import CancelButton from './CancelButton';

const TimeBox = ({ gapTime, gapTimeFunc, owner, ownerFunc }) => {
  const router = useRouter();
  let { product } = router.query;

  const { auctionData } = useSelector(state => state.auction);
  const { userData } = useSelector(state => state.user);
  const [auctionState, setAuctionState] = useState('');

  const [auctionTime, setAuctionTime] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState('');

  let onFlag = e => {
    setTime(e);
  };

  let t1 = new Date(auctionTime * 1000);
  let t2 = new Date();
  let gap = t1.getTime() - t2.getTime();
  let day = Math.floor(gap / (1000 * 60 * 60 * 24));
  let hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((gap % (1000 * 60)) / 1000);

  useEffect(() => {
    if (!gapTime && gap < 0) {
      gapTimeFunc(true);
    } else {
      gapTimeFunc(false);
    }
  }, [gap && gap < 0]);

  useEffect(() => {
    if (auctionData) {
      setAuctionTime(auctionData.time);
      ownerFunc(auctionData.owner);
      setAuctionState(auctionData.auctionState);
    }
  }, [auctionData, ownerFunc]);

  return (
    <>
      <Clock
        style={{ display: 'none' }}
        onChange={onFlag}
        ticking={true}
        timezone={'US/Pacific'}
      />
      <AuctionGray>
        {auctionTime && new Date(auctionTime * 1000).toLocaleString()} 마감
        {owner.toLowerCase() === userData?.metamask.toLowerCase() &&
          !(auctionState === '3' || gapTime) && (
            <CancelButton product={product} />
          )}
      </AuctionGray>
      <AuctionTime>
        {auctionState === '3' ? (
          <>취소된 경매입니다.</>
        ) : (
          <>
            {gapTime ? (
              <>종료된 경매입니다.</>
            ) : (
              <>
                {day} 일 {hour} 시 {min} 분 {sec} 초
              </>
            )}
          </>
        )}
      </AuctionTime>
    </>
  );
};

TimeBox.prototype = {
  gapTime: PropTypes.bool.isRequired,
  gapTimeFunc: PropTypes.func.isRequired,
  owner: PropTypes.string.isRequired,
  ownerFunc: PropTypes.func.isRequired,
};

export default TimeBox;
