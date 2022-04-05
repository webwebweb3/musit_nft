import React, { useEffect } from 'react';
import { Campaign } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const NoticeIcon = ({ Notice, setNotice }) => {
  const auction = useSelector(state => state.auction);

  useEffect(() => {
    let array = Notice;
    if (auction.createAuctionDone) {
      array.push('경매가 등록되었습니다.');
    }

    setNotice(array);
  }, [auction, setNotice, Notice]);

  return (
    <>
      {Notice.length !== 0 ? (
        <Badge color="primary" badgeContent=" " variant="dot">
          <Campaign color="info" />
        </Badge>
      ) : (
        <Badge color="primary" badgeContent={0}>
          <Campaign color="info" />
        </Badge>
      )}
    </>
  );
};

export default NoticeIcon;
