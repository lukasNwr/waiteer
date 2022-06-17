import React from 'react';
import Image from 'next/image';
import HeroCard from '/components/hero/hero-card';
import HeroTime from '/components/hero/hero-time';
import HeroBreadcrumbs from './hero-breadcrumbs';

const Hero = () => {
  return (
    <>
      <div
        className="flex grow-0 bg-cover bg-center h-[55vh] w-full bg-hero_image staic"
        style={{
          backgroundImage: `linear-gradient(0deg,
          rgba(0,0,0, 0.45),
          rgba(0,0,0, 0)),url('/hero_image.jpeg')`,
        }}
      >
        <div className="h-fit top-[15rem] left-[9rem] absolute">
          <HeroTime />
        </div>
        <div className="h-fit top-[18rem] left-[9rem] absolute">
          <HeroCard />
        </div>
        <div className="h-fit top-[25] bottom-[17rem] left-[9rem] absolute">
          <HeroBreadcrumbs />
        </div>
      </div>
    </>
  );
};

export default Hero;
