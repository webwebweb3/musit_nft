import React from 'react';
import Link from 'next/link';

import { Global } from './heroSectionStyle';
import { Button } from './Button';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <Global />
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div
          className="row home__hero-row"
          style={{
            display: 'flex',
            flexDirection: imgStart === 'start' ? 'row' : 'row-reverse',
            width: '100%',
          }}
        >
          <div className="row home_hero_img">
            <div className="home__hero-img-wrapper">
              <img src={img} alt={alt} className="home__hero-img" />
            </div>
          </div>
          <div className="row home_hero_img">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? 'heading' : 'heading dark'}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? 'home__hero-subtitle'
                    : 'home__hero-subtitle dark'
                }
              >
                {description}
              </p>
              <Link href="/">
                <Button buttonSize="btn--wide" buttonColor="blue">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
