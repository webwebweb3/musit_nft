import React from 'react';
import { BsXDiamondFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import { Global } from './SubscriptionBuyStyle';
import { Button } from './homepage/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import MuiGrid from '@mui/material/Grid';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(1, 3),
  },
}));

const SubscriptionBuy = () => {
  const content1 = <div>{`가입비 + 월 구독료 무료.`}</div>;
  const content2 = (
    <div>{`subscription (한 달 + 해지안하면 자동 갱신(약관?)) 지불.`}</div>
  );
  const content3 = (
    <div>{`subscription (무제한) + 최초 가입시 가입비 지불`}</div>
  );
  return (
    <>
      <Global />
      <div className="buySection">
        <h1 className="buyHeading">구독권 구매</h1>
        <div className="buyWrapper">
          <div className="buyContainer">
            <div className="buyContainer-card buyContainer-cardInfo">
              <div className="icon">
                <Button buttonSize="btn--wide" buttonColor="primary">
                  <FaFire /> Event Plan
                </Button>
              </div>
              <Divider orientation="vertical" flexItem>
                {' '}
                0${' '}
              </Divider>
              <Grid item xs>
                {content1}
              </Grid>
              <p></p>
            </div>
          </div>
        </div>
        <div className="buyWrapper">
          <div className="buyContainer">
            <div className="buyContainer-card buyContainer-cardInfo">
              <div className="icon">
                <Button buttonSize="btn--wide" buttonColor="primary">
                  <BsXDiamondFill /> User Plan
                </Button>
              </div>
              <Divider orientation="vertical" flexItem>
                {' '}
                29.99${' '}
              </Divider>
              <Grid item xs>
                {content2}
              </Grid>
              <p></p>
            </div>
          </div>
        </div>
        <div className="buyWrapper">
          <div className="buyContainer">
            <div className="buyContainer-card buyContainer-cardInfo">
              <div className="icon">
                <Button buttonSize="btn--wide" buttonColor="primary">
                  <GiCrystalize /> Artist Plan
                </Button>
              </div>
              <Divider orientation="vertical" flexItem>
                {' '}
                99.99${' '}
              </Divider>
              <Grid item xs>
                {content3}
              </Grid>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionBuy;
