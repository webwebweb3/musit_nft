import { web3 } from '$contracts';
import { marketPlaceGetEventAction } from '$reduxsaga/request/marketPlace_request';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditionHistory = ({ tokenId, image, musicData }) => {
  console.log('뮤직데이타', musicData);
  const dispatch = useDispatch();
  const { eventData } = useSelector(state => state.market);
  const getEvent = async () => {
    dispatch(marketPlaceGetEventAction(tokenId));
  };

  useEffect(() => {
    if (!eventData) getEvent();
    console.log('이벤트 데이터', eventData);
  }, [eventData]);
  return (
    <>
      {eventData &&
        eventData.map((v, i) => {
          const timestamp = v.returnValues.timeStamp * 1000;
          var getDate = new Date(timestamp);

          const date = `${getDate.getFullYear()}/${
            getDate.getMonth() + 1
          }/${getDate.getDate()} ${getDate.getHours()}:${(
            '00' + getDate.getMinutes()
          ).slice(-2)}`;

          return (
            <Box className="edition_history_contents_container">
              <Box className="edition_history_contents_title_container">
                <Box className="edition_history_contents_image">
                  <img
                    src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${image}`}
                    width="52px"
                    height="52px"
                  />
                </Box>
                <Box className="edition_history_contents_title">
                  {musicData.properties.dataToSubmit.title}
                </Box>
              </Box>
              <Box className="edition_history_contents_price">
                <Box style={{ display: 'inline-block', margin: 'auto 0' }}>
                  <img src="/ethereum.png" width="52px" height="52px" />
                </Box>
                <Box style={{ display: 'inline-block', margin: 'auto 0' }}>
                  {web3.utils.fromWei(v.returnValues.price)} ETH
                </Box>
              </Box>
              <Box className="edition_history_contents_buyer">
                {v.returnValues.buyer}
              </Box>
              <Box className="edition_history_contents_seller">
                {v.returnValues.seller}
              </Box>
              <Box className="edition_history_contents_date">{date}</Box>
            </Box>
          );
        })}
    </>
  );
};

export default EditionHistory;
