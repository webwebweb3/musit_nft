import React from 'react';
import Link from 'next/link';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';
import { Global } from './pricingStyle';
import { useTranslation } from 'react-i18next';

function Pricing() {
  const { t, i18n } = useTranslation();
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
                  <h3>{t('3monthsfree')}</h3>
                  <h4>0 ETH</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>{t('FreeStreaming')}</li>
                    <li>{t('SubscriptionFree')}</li>
                    <li>{t('3MonthsFreeNFT')}</li>
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
                  <h3>{t('User')}</h3>
                  <h4>0.05 ETH ~</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>{t('UnlimitedStreaming')}</li>
                    <li>{t('PlayListsService')}</li>
                    <li>{t('ArtistsBucket')}</li>
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
                  <h3>{t('Artists')}</h3>
                  <h4>0.1 ETH ~</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>{t('UnlimitedStreaming')}</li>
                    <li>{t('NFTTrade')}</li>
                    <li>{t('NFTTrack')}</li>
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
