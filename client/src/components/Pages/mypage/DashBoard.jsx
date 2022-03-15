import React from 'react';
import styled from 'styled-components';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';
import { FaHeartbeat } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import { cardStyles } from './ReusableStyles';

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

const DashBoard = () => {
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
    </>
  );
};

export default DashBoard;
