import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/subscription" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>3개월 무료</h3>
                <h4>$0</h4>
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
            <Link to="/subscription" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>유저</h3>
                <h4>$29.99</h4>
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
            <Link to="/subscription" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>아티스트</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>무제한 스트리밍 제공</li>
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
  );
}
export default Pricing;
