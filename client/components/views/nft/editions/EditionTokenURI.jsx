import Router, { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { mintMusicTokenContract, saleMusicTokenContract } from '$contracts';
import EditionChart from './editionChart/EditionChart';
import EditionDescription from './editionDescription/EditionDescription';
import EditionImages from './editionImage/EditionImages';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import EditionPurchase from './editionPurchase/EditionPurchase';
import { style } from './style';
import { useSelector } from 'react-redux';
import PurchasingMusic from './editionPurchasing/PurchasingMusic';
import PurchasingError from './editionPurchasing/PurchasingError';
import PurchasingSuccess from './editionPurchasing/PurchasingSuccess';
import { Divider } from '@mui/material';
import EditionHistory from './editionHistory/EditionHistory';
import EditionHistoryLabel from './editionHistory/EditionHistoryLabel';
import { Box } from '@mui/material';

const EditionTokenURI = () => {
  const [musicData, setMusicData] = useState();
  const [musicOwner, setMusicOwner] = useState();
  const [musicPrice, setMusicPrice] = useState();
  const market = useSelector(state => state.market);
  const router = useRouter();
  const getMusicTokenData = async () => {
    try {
      const tokenURI = await mintMusicTokenContract.methods
        .tokenURI(router.query.editionIPFSUrl)
        .call();

      const ownerOf = await mintMusicTokenContract.methods
        .ownerOf(router.query.editionIPFSUrl)
        .call();

      const tokenPrice = await saleMusicTokenContract.methods
        .getMusicTokenPrice(router.query.editionIPFSUrl)
        .call();

      const ipfsData = await fetch(`https://ipfs.infura.io/ipfs/${tokenURI}`);
      const data = await ipfsData.json();
      console.log(data);
      setMusicOwner(ownerOf);
      setMusicPrice(tokenPrice);
      setMusicData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!musicData) getMusicTokenData();
  }, [musicData, musicOwner]);

  return (
    <>
      {musicData && (
        <>
          {market?.purchaseNFTLoading ? (
            <PurchasingMusic />
          ) : (
            <>
              {market?.purchaseNFTError ? (
                <PurchasingError />
              ) : (
                <>
                  {market?.purchaseNFTDone ? (
                    <>
                      <PurchasingSuccess />
                    </>
                  ) : (
                    <Box sx={style.editionContainer}>
                      <Box
                        sx={style.editionBackContainer}
                        onClick={() => Router.push('/nft/marketplace')}
                      >
                        <ArrowBackIcon
                          sx={{ fontSize: '20px', marginRight: '10px' }}
                        />
                        뒤로
                      </Box>
                      <Box sx={style.editionTopContents}>
                        <Box sx={style.editionTopLeftContainer}>
                          <EditionImages
                            image={musicData.properties.S3AlbumCover}
                            music={musicData.properties.IPFSUrl}
                          />
                        </Box>
                        <Box sx={style.editionTopRightContainer}>
                          <EditionDescription
                            owner={musicOwner}
                            musicData={musicData}
                            musicPrice={musicPrice}
                          />
                        </Box>
                      </Box>

                      <Box className="edition_history_container">
                        <Box className="edition_history_wrapper">
                          <Box className="edition_history_title">
                            이전 판매 기록
                          </Box>
                          <Divider sx={{ backgroundColor: '#97769c70' }} />
                          <Box className="edition_history_label_container">
                            <EditionHistoryLabel />
                          </Box>
                          <Box className="edition_history_description">
                            <EditionHistory
                              tokenId={router.query.editionIPFSUrl}
                              image={musicData.properties.S3AlbumCover}
                              musicData={musicData}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default EditionTokenURI;

{
  /* <EditionChart
  tokenId={router.query.editionIPFSUrl}
/> */
}
