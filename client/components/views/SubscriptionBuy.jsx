import { Box } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { BsXDiamondFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SubscriptionBuy = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: '100px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1>구독권 구매</h1>
        <Box>구독권 구매</Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item>
              {' '}
              <Button
                variant="contained"
                startIcon={<BsXDiamondFill />}
                size="large"
              >
                청취자
              </Button>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>subscription (한 달 + 해지안하면 자동 갱신(약관?)) 지불</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {' '}
              <GiCrystalize />
              아티스트
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>subscription (무제한) + 최초 가입시 가입비 지불</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {' '}
              <FaFire /> 이벤트
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>가입비 + 월 구독료 무료</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SubscriptionBuy;
