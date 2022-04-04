import Router, { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const EditionIPFSUrl = () => {
  const [musicData, setMusicData] = useState();
  const router = useRouter();
  const getMusicTokenData = async () => {
    try {
      const ipfsData = await fetch(
        `https://ipfs.infura.io/ipfs/${router.query.editionIPFSUrl}`,
      );
      const data = await ipfsData.json();
      setMusicData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!musicData) getMusicTokenData();
  }, [musicData]);
  return <div>{musicData}</div>;
};

export default EditionIPFSUrl;
