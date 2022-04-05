import { Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import EditionDescription from './editionDescription/EditionDescription';
import EditionImages from './editionImage/EditionImages';
import { style } from './style';

const EditionTokenURI = () => {
  const [musicData, setMusicData] = useState();
  const [musicOwner, setMusicOwner] = useState();
  const router = useRouter();
  const getMusicTokenData = async () => {
    try {
      const ipfsData = await fetch(
        `https://ipfs.infura.io/ipfs/${router.query.editionIPFSUrl}`,
      );
      const data = await ipfsData.json();
      console.log(data);
      // const ownerOf = await
      setMusicData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!musicData) getMusicTokenData();
    console.log(musicData);
  }, [musicData]);

  return (
    <>
      {musicData && (
        <Box sx={style.editionContainer}>
          <Box sx={style.editionTopContents}>
            <Box sx={style.editionTopLeftContainer}>
              <EditionImages
                image={musicData.properties.S3AlbumCover}
                music={musicData.properties.IPFSUrl}
              />
            </Box>
            <Box sx={style.editionTopRightContainer}>
              <EditionDescription />
            </Box>
          </Box>
          <Box></Box>
        </Box>
      )}
    </>
  );
};

export default EditionTokenURI;
