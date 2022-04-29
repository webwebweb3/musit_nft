import { Box, Grid } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Link from 'next/link';

const a = [1, 2, 3, 4, 5, 6, 7, 8];

const MyFavoriteArtist = () => {
  const { userData } = useSelector(state => state.user);
  const [myFavoriteArtists, setMyFavoriteArtists] = useState();
  const getFavoriteArtists = async () => {
    Axios.get('/mypage/getArtists', {
      params: {
        userMetamask: userData.metamask,
      },
    }).then(res => setMyFavoriteArtists(res.data));
  };
  useEffect(() => {
    getFavoriteArtists();
  }, [userData && userData.metamask]);

  useEffect(() => {
    console.log(myFavoriteArtists);
  }, [myFavoriteArtists]);

  return (
    <Box>
      <Box>
        <h1 style={{ marginTop: '-1px', color: '#fff' }}>좋아하는 아티스트</h1>
      </Box>
      <Box className="mypage_myfavorite_artist_contents">
        <Grid container columns={{ xs: 3, sm: 8, md: 12 }}>
          {myFavoriteArtists?.map((v, i) => {
            return (
              <Grid item xs={2} sm={3} md={4} key={i}>
                <Box style={{ margin: '20px 0' }}>
                  <Link href="/studio/[artistName]" as={`/studio/${v?.name}`}>
                    <Box style={{ cursor: 'pointer' }}>
                      <Box style={{ textAlign: 'center' }}>
                        {v.img ? (
                          <Avatar
                            alt="user"
                            src={v.img}
                            sx={{ width: 120, height: 120, margin: 'auto' }}
                          />
                        ) : (
                          <Avatar
                            alt="Default Image"
                            src="/defaultProfile.png"
                            sx={{ width: 120, height: 120, margin: 'auto' }}
                          />
                        )}
                      </Box>
                      <Box
                        style={{
                          marginTop: '20px',
                          fontSize: '20px',
                          padding: '0 10px',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {v.name}
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyFavoriteArtist;
