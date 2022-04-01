import styled from 'styled-components';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';
import { FaHeartbeat } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import { cardStyles } from './ReusableStyles';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Divider from '@mui/material/Divider';

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
  const theme = useTheme();
  return (
    <>
      <Section>
        <div className="analytic ">
          <div className="content">
            <h5>총 음악 재생수 </h5>
            <h2> 재생 시간 분 초 </h2>
          </div>
          <div className="logo">
            <BsMusicPlayerFill />
          </div>
        </div>
        <div className="analytic">
          <div className="logo">
            <IoStatsChart />
          </div>
          <div className="content">
            <h5>내가 구매한 NFT</h5>
            <h2>보유중인 NFT 갯수 </h2>
          </div>
        </div>
        <div className="analytic">
          <div className="logo">
            <FaHeartbeat />
          </div>
          <div className="content">
            <h5>좋아하는 노래 트랙</h5>
            <h2>좋아하는 노래 트랙 수 </h2>
          </div>
        </div>
        <div className="analytic ">
          <div className="content">
            <h5>현재 구독 정보 </h5>
            <h2>구독 등급 보여주기</h2>
          </div>
          <div className="logo">
            <SiSubstack />
          </div>
        </div>
      </Section>
      <br />
      <Divider></Divider>
      <h2>최신 플레이 목록</h2>
      <Section>
        <div>
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  노래제목
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  아티스트이름
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="bgimg.jpg"
              alt="앨범 커버"
            />
          </Card>
        </div>
        <div>
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  노래제목
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  아티스트이름
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="bgimg.jpg"
              alt="앨범 커버"
            />
          </Card>
        </div>
        <div>
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  노래제목
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  아티스트이름
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="bgimg.jpg"
              alt="앨범 커버"
            />
          </Card>
        </div>
        <div>
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  노래제목
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  아티스트이름
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="bgimg.jpg"
              alt="앨범 커버"
            />
          </Card>
        </div>
      </Section>
    </>
  );
};

export default DashBoard;
