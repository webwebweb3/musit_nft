import styled from 'styled-components';
import { IoStatsChart } from 'react-icons/io5';
import { FaHeartbeat } from 'react-icons/fa';
import { cardStyles } from './ReusableStyles';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { useState } from 'react';
import { mintMusicTokenContract } from '$contracts';
import Link from 'next/link';
import { studioGetMyMusics } from '$reduxsaga/request/studio_request';
// import StudioMyMusics from '../studio/myStudio/studioMyMusics/StudioMyMusics';
import MyRecentMusic from './myRecentMusic/MyRecentMusic';

const Section = styled.section`
  width: 738.54px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #fff;
      color: black;
      svg {
        color: white;
      }
      cursor: pointer;
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
const DashBoard = () => {
  const dispatch = useDispatch();
  const [cntMyNFT, setCntMyNFT] = useState();
  const { userData } = useSelector(state => state.user);
  const studio = useSelector(state => state.studio);
  const getMyMusics = () => {
    dispatch(studioGetMyMusics(userData.name));
  };

  const account = userData?.metamask;

  const getMyMusicTokens = async () => {
    try {
      const myNFTArray = await mintMusicTokenContract.methods
        .getMusicTokens(account)
        .call();
      setCntMyNFT(myNFTArray.length);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMyMusics();
  }, []);
  useEffect(() => {
    if (!cntMyNFT) getMyMusicTokens();
    console.log(cntMyNFT);
  }, [cntMyNFT]);

  const theme = useTheme();
  return (
    <>
      <Section>
        <Link href="/mypage/mynft">
          <div className="analytic">
            <div className="logo">
              <IoStatsChart />
            </div>
            <div className="content">
              <h3>보유중인 NFT 갯수 </h3>
              <h2>{cntMyNFT ? cntMyNFT : 0}</h2>
            </div>
          </div>
        </Link>
        <div className="analytic">
          <div className="logo">
            <FaHeartbeat />
          </div>
          <div className="content">
            <h3>좋아하는 노래 트랙 수 </h3>
            <h2>{userData ? userData.user.length : 0}</h2>
          </div>
        </div>
      </Section>
      <br />
      <Divider />
      <Box sx={{ color: '#fff', marginTop: '40px' }}>
        <Box
          sx={{
            color: '#dada',
            letterSpacing: -2,

            marginRight: '10px',
            display: 'inline-block',
          }}
        >
          <h1>내 최신 등록 음악 목록</h1>
        </Box>
        <Link href="/studio/[artistName]" as={`/studio/${userData?.name}`}>
          <Box
            sx={{ color: '#aaa', cursor: 'pointer', display: 'inline-block' }}
          >
            더보기
          </Box>
        </Link>
      </Box>
      <Box sx={{ color: '#fff' }}>
        {studio.studioMyMusics ? <MyRecentMusic /> : <Box>없음</Box>}
      </Box>
    </>
  );
};

export default DashBoard;
