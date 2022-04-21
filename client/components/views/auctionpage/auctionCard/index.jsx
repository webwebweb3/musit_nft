import PageList from '$components/layout/page';
import { mintMusicTokenContract } from '$contracts';
import { allAuctionsAction } from '$reduxsaga/request/auction_request';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AuctionCard = () => {
  const { allAuctionData, allAuctionLoading } = useSelector(
    state => state.auction,
  );
  const [auctionData, setAuctionData] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  let { search, genre } = router.query;

  useEffect(() => {
    dispatch(allAuctionsAction());
  }, [dispatch, search, genre]);

  useEffect(() => {
    content();
  }, [allAuctionData, search, genre]);

  const content = useCallback(async () => {
    try {
      let ipfsInfo = [];

      if (allAuctionData) {
        for (let i = 0; i < allAuctionData.length; i++) {
          console.log(allAuctionData[0]);
          let { tokenId } = allAuctionData[i];
          let tokenURI = await mintMusicTokenContract.methods
            .tokenURI(tokenId)
            .call();

          let ipfsData = await fetch(`https://ipfs.infura.io/ipfs/${tokenURI}`);
          let dataArray = await ipfsData.json();

          ipfsInfo.push({
            msgSender: allAuctionData[i].msgSender,
            AuctionTokenData: dataArray,
            newAuctionContract: allAuctionData[i].newAuctionContract,
            tokenId: allAuctionData[i].tokenId,
          });
        }

        if (search) {
          let searchTokenArray = ipfsInfo.filter(
            auctionToken =>
              auctionToken.AuctionTokenData.properties.dataToSubmit.artist ===
              search,
          );

          ipfsInfo = searchTokenArray;
        } else if (genre) {
          let genreArray = ipfsInfo.filter(
            auctionToken =>
              auctionToken.AuctionTokenData.properties.dataToSubmit.genre ===
              genre,
          );

          ipfsInfo = genreArray;
        }
      }

      setAuctionData(ipfsInfo);
    } catch (error) {
      console.error(error);
    }
  }, [allAuctionData]);

  return (
    <>
      {!allAuctionLoading ? (
        <PageList items={auctionData} type="auction" />
      ) : (
        <div style={{ width: '100%', alignItems: 'center' }}>
          <CircularProgress style={{ margin: '100px 500px' }} />
        </div>
      )}
    </>
  );
};

export default AuctionCard;
