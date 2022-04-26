import { Box, Divider } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { streamingContract } from '$contracts';
import MusicCard from '$components/views/cards/MusicCard';
import { useTranslation } from 'react-i18next';

const LatestMusicAll = ({ func }) => {
  const { t, i18n } = useTranslation();
  const [musics, setMusics] = useState([]);
  const getMusic = async () => {
    try {
      const getLatestMusicToken = await streamingContract.methods
        .getLatestMusicTokenAll()
        .call();

      console.log('겟 레이티스트', getLatestMusicToken);
      // const latestMusic = getLatestMusicToken.filter(music => {
      //   return music !== '' && music !== null && music !== undefined;
      // });

      const tempMusics = [];

      for (let i = 0; i < getLatestMusicToken.length; i++) {
        const response = await fetch(
          `https://ipfs.infura.io/ipfs/${getLatestMusicToken[i].tokenURI}`,
        );
        const data = await response.json();
        tempMusics.push({ data, tokenId: getLatestMusicToken[i].tokenId });
      }
      console.log('템프 뮤직', tempMusics);
      setMusics(tempMusics);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (musics.length === 0) {
      getMusic();
    }
    console.log('직들', musics);
  }, [musics]);

  return (
    <Box className="streamingBox">
      <Box>
        <Box className="streamingTitle">
          {t('LatestMusics')}
          <Link href={`/streaming/latestMusic`}>
            <span className="latestMusic">{t('SeeAll')}</span>
          </Link>
        </Box>
      </Box>
      <Divider className="streamingDivider" />
      <Box>
        <Box>
          {musics.length !== 0 && (
            <>
              {musics.map((v, i) => {
                return (
                  <>
                    <MusicCard
                      musicTitle={`${v.data.properties.dataToSubmit.title}`}
                      albumCover={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${v.data.properties.S3AlbumCover}`}
                      artistName={`${v.data.properties.dataToSubmit.artist}`}
                      key={i}
                      editionNum={`${v.tokenId}`}
                      func={func}
                    />
                  </>
                );
              })}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LatestMusicAll;
