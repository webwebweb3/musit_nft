import React from 'react';
import Link from 'next/link';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';
import { Global } from './pricingStyle';

function Pricing() {
  return (
    <>
      <Global />
      <IconContext.Provider value={{ color: '#fff', size: 64 }}>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link href="/subscriptionbuy">
                <div className="pricing__container-card pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>3개월 무료</h3>
                  <h4>0 ETH</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>무료 스트리밍</li>
                    <li>아티스트 가입비 무료</li>
                    <li>3개월간 NFT 거래 가능</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link href="/subscriptionbuy">
                <div className="pricing__container-cardInfo pricing__container-card">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>유저</h3>
                  <h4>0.05 ETH ~</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>무제한 스트리밍 서비스</li>
                    <li>플레이리스트 제공</li>
                    <li>아티스트 바구니 제공</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link href="/subscriptionbuy">
                <div className="pricing__container-cardInfo pricing__container-card">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>아티스트</h3>
                  <h4>0.1 ETH ~</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>무제한 스트리밍 서비스</li>
                    <li>NFT 거래/경매 가능</li>
                    <li>NFT 음원 등록 가능</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
export default Pricing;
