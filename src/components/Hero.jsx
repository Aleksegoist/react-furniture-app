import React from 'react';
import { hero } from '../data';
import Stats from './Stats';

const Hero = () => {
  // destructure hero
  const { title, subtitle, buttonText } = hero;
  return (
    <section className='h-[850px] w-full  bg-hero bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12  lg:bg-center lg:mb-28'>
      <div className='container mx-auto text-center '>
        {/* Title */}
        <h1 className='text-2xl text-white mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[900px]'>
          {title}
        </h1>
        {/* Subtitle */}
        <h2 className='text-white  mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>
          {subtitle}
        </h2>
        <button className='text-white font-semibold bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[60px] lg:py-[16px] lg:mb-[194px]'>
          {buttonText}
        </button>
        {/* stats */}
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
