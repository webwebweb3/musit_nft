import { Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { mintMusicTokenContract } from '$contracts';
import MusicCard from '../../cards/MusicCard';
import Link from 'next/link';

const ChartMusic = ({ func }) => {
  const [musics, setMusics] = useState([]);
  const getMusic = async () => {
    try {
      const getLatestMusicToken = await mintMusicTokenContract.methods
        .getLatestMusicToken()
        .call();

      // const latestMusic = getLatestMusicToken.filter(music => {
      //   return music !== '' && music !== null && music !== undefined;
      // });

      const tempMusics = [];

      for (let i = 0; i < getLatestMusicToken.length; i++) {
        const response = await fetch(
          `https://ipfs.infura.io/ipfs/${getLatestMusicToken[i]}`,
        );
        const data = await response.json();
        tempMusics.push(data);
      }
      setMusics(tempMusics);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (musics.length === 0) {
      getMusic();
    }
  }, [musics]);

  return (
    <Box className="streamingBox">
      <Box>
        <Box className="streamingTitle">
          인기 음악
          <Link href={`/streaming/latestMusic`}>
            <span className="latestMusic">모두 보기</span>
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
                  <MusicCard
                    musicTitle={`${v.properties.dataToSubmit.title}`}
                    albumCover={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${v.properties.S3AlbumCover}`}
                    artistName={`${v.properties.dataToSubmit.artist}`}
                    key={i}
                    func={func}
                  />
                );
              })}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChartMusic;
