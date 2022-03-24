import React from 'react';

import HeroSection from './HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import Pricing from './Pricing';

function HomePage() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
    </>
  );
}

export default HomePage;
