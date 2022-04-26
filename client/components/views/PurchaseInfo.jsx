import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Stack, Grid, Container, Typography, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

const PurchaseInfo = () => {
  const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
  }));

  const PurchaseInfoContainer = styled('div')(({ theme }) => ({
    width: '100%',
    margin: 'auto',
    display: 'flex',
  }));

  const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    // justifyContent: 'center',
    padding: theme.spacing(12, 0),
  }));

  return (
    <>
      <PurchaseInfoContainer sx={{ display: 'flex' }}>
        <SectionStyle>
          <CardMedia component="img" height="300" image="" alt="앨범커버" />
        </SectionStyle>
        <Container>
          <ContentStyle>
            <Stack>
              <Box sx={{ pb: 5, backgroundColor: '#fff' }}>
                <Typography variant="h3">가수이름</Typography>
                <Typography variant="h4">앨범이름</Typography>
              </Box>
              <Divider> STATUS</Divider>
            </Stack>
            <Typography variant="h4">가격그래프</Typography>
            <Grid item xs={12} md={6} lg={8}>
              <div style={{ width: 700 }}></div>
            </Grid>
          </ContentStyle>
        </Container>
      </PurchaseInfoContainer>
    </>
  );
};

export default PurchaseInfo;
