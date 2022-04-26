import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import GavelIcon from '@mui/icons-material/Gavel';
import CancelIcon from '@mui/icons-material/Cancel';

import {
  auctionAction,
  auctionApproveAction,
  auctionCancelAction,
} from '$reduxsaga/request/auction_request';
import {
  AuctionAllContainer,
  AuctionContentImg,
  AuctionContents,
  AuctionContentsContainer,
  AuctionDivider,
} from '../style';
import TimeBox from './TimeBox';
import BidBox from './BidBox';
import TitleBox from './TitleBox';
import MyBidBox from './MyBidBox';
import AuctionBidButton from './AuctionBidButton';
import { Button, CircularProgress } from '@mui/material';

const AuctionProductPage = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const {
    approveCheckAuctionLoading,
    approveAuctionLoading,
    approveAuctionData,
    auctionTokenData,
    auctionData,
  } = useSelector(state => state.auction);
  const router = useRouter();
  let { product } = router.query;
  const [gapTime, setGapTime] = useState(false);
  const [approve, setApprove] = useState(false);
  const [owner, setOwner] = useState('');

  useEffect(() => {
    if (!approveCheckAuctionLoading) {
      setApprove(approveAuctionData);
    }
  }, [approveCheckAuctionLoading]);

  useEffect(() => {
    dispatch(auctionAction(product));
  }, [approveAuctionLoading]);

  const onClickApprove = useCallback(() => {
    let data = {
      metamask: userData.metamask,
      product,
    };
    dispatch(auctionApproveAction(data));
  }, [userData, product]);

  const onClickCancelAuction = useCallback(() => {
    let data = {
      metamask: userData.metamask,
      product,
    };

    dispatch(auctionCancelAction(data));
  }, [dispatch, userData, product]);

  return (
    <>
      {!auctionData ? (
        <div style={{ display: 'flex' }}>
          <div style={{ margin: 'auto' }}>
            <CircularProgress color="inherit" />
          </div>
        </div>
      ) : (
        <AuctionAllContainer>
          {!approve && auctionData && auctionData.auctionState !== '3' && (
            <div className="auctionBlur">
              <div
                style={{
                  fontSize: '55px',
                  color: '#173142',
                  display: 'flex',
                  margin: 'auto',
                  flexDirection: 'column',
                }}
              >
                <div className="svgContainer">
                  <div>
                    <Image
                      src="/apgifus.gif"
                      alt="종이"
                      width="300px"
                      height="300px"
                    />
                  </div>
                </div>
                <div>판매자 승인 대기중</div>

                <div style={{ margin: 'auto', padding: '30px' }}>
                  {userData && owner === userData.metamask && (
                    <>
                      <Button
                        startIcon={<GavelIcon />}
                        style={{ fontSize: '20px', padding: '10px' }}
                        onClick={onClickApprove}
                        variant="text"
                      >
                        <span style={{ color: '#6bc4ff' }}>경매 시작하기</span>
                      </Button>
                      <Button
                        startIcon={<CancelIcon />}
                        style={{ fontSize: '20px', padding: '10px' }}
                        onClick={onClickCancelAuction}
                        variant="text"
                      >
                        <span style={{ color: '#6bc4ff' }}>경매 취소</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          <AuctionContentsContainer>
            {auctionTokenData && (
              <AuctionContentImg>
                <Image
                  src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${auctionTokenData.properties.S3AlbumCover}`}
                  alt="img"
                  layout="fixed"
                  width="550px"
                  height="550px"
                />
              </AuctionContentImg>
            )}
            <AuctionContents>
              {auctionTokenData && (
                <TitleBox
                  text={auctionTokenData.properties.dataToSubmit.title}
                />
              )}
              <AuctionDivider />

              <TimeBox
                product={product}
                gapTime={gapTime}
                gapTimeFunc={setGapTime}
                owner={owner}
                ownerFunc={setOwner}
              />
              <AuctionDivider />

              <BidBox gapTime={gapTime} />
              <AuctionDivider />
              {userData && (
                <>
                  <MyBidBox product={product} gapTime={gapTime} />
                </>
              )}
              {userData &&
                !gapTime &&
                owner.toLowerCase() !== userData?.metamask.toLowerCase() && (
                  <>
                    <AuctionBidButton product={product} />
                  </>
                )}
            </AuctionContents>
          </AuctionContentsContainer>
        </AuctionAllContainer>
      )}
    </>
  );
};

export default AuctionProductPage;
