import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { cardStyles } from './ReusableStyles';
import { GiCrystalize } from 'react-icons/gi';
import Divider from '@mui/material/Divider';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const Section = styled.section`
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
function createData(date, info, fee) {
  return { date, info, fee };
}

const Subscription = () => {
  const rows = [
    createData('2022/02/02', '아티스트', '99$'),
    createData('2020/01/05', '아티스트', '99$'),
  ];

  return (
    <>
      <h1> 구독 정보 </h1>
      <Section>
        <div sx={{ bgColor: '#fff' }}>
          <Box gridColumn="span 8" color="#fff">
            <Grid container spacing={5}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={5}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      고객님은
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      구독정보(등급)
                    </Typography>
                    <Typography variant="body2">메타마스크 ID:</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    "아티스트" 입니다.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="analytic ">
          <div className="content">
            <h5>현재 구독 정보 </h5>
            <h2>구독 등급 보여주기</h2>
          </div>
          <div className="logo">
            <GiCrystalize />
          </div>
        </div>
      </Section>
      <Divider>
        <br /> 구독료 지불내역{' '}
      </Divider>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>구독 날짜</TableCell>

              <TableCell align="right">구독 내용</TableCell>
              <TableCell align="right">구독료</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.info}</TableCell>
                <TableCell align="right">{row.fee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Subscription;
