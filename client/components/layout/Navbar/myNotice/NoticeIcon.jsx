import React, { useEffect } from 'react';
import { Campaign } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const NoticeIcon = ({ NoticeArray, setNotice }) => {
  const auction = useSelector(state => state.auction);

  useEffect(() => {
    let array = NoticeArray;
    if (auction.createAuctionDone) {
      array.push('경매가 등록되었습니다.');
    }

    setNotice(array);
  }, [auction, setNotice, NoticeArray]);

  return (
    <>
      {NoticeArray.length !== 0 ? (
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

NoticeIcon.propTypes = {
  NoticeArray: PropTypes.array.isRequired,
  setNotice: PropTypes.func.isRequired,
};

export default NoticeIcon;
