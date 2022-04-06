import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { marketPlaceGetOwnerAction } from '../../../../../_request/marketPlace_request';

const EditionDescription = ({ owner, musicData }) => {
  const data = musicData.properties.dataToSubmit;
  const marketplace = useSelector(state => state.market);

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
    if (marketplace.getOwnerDone) {
      setOwnerName(marketplace.userData);
    }
  }, [marketplace.getOwnerDone, ownerName]);
  return (
    <Box sx={{ marginTop: '30px' }}>
      <Box sx={{ fontSize: '60px', fontWeight: 500 }}>{data.title}</Box>
      <Box sx={{ fontSize: '20px', color: '#768fb5', fontWeight: 600 }}>
        <Box sx={{ display: 'inline-block', paddingRight: '10px' }}>
          소유자 :
        </Box>
        <Box sx={{ display: 'inline-block' }}>{ownerName && ownerName}</Box>
      </Box>
    </Box>
  );
};

export default EditionDescription;
