import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { marketPlaceGetOwnerAction } from '../../../../../_request/marketPlace_request';

const EditionDescription = ({ owner, musicData }) => {
  const data = musicData.properties.dataToSubmit;
  const marketplace = useSelector(state => state.market);
  console.log(musicData);

  const dispatch = useDispatch();
  const [ownerName, setOwnerName] = useState();
  const [loading, setLoading] = useState(false);

  const getOwnerName = async () => {
    dispatch(marketPlaceGetOwnerAction(owner));
  };

  useEffect(() => {
    getOwnerName();
  }, []);

  useEffect(() => {
    console.log(marketplace);
    if (marketplace.getOwnerDone) {
      setOwnerName(marketplace.userData);
    }
    console.log(ownerName);
  }, [marketplace.getOwnerDone, ownerName]);
  return (
    <Box sx={{ marginTop: '60px' }}>
      <Box>{data.title}</Box>
      <Box>{ownerName && ownerName}</Box>
    </Box>
  );
};

export default EditionDescription;
