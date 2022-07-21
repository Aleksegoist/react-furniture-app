import React from 'react';
import { features } from '../data';

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle '>{subtitle}</p>
          </div>
          {/* image */}
          <div className='flex-1'>
            <img className='rounded-[20px]' src={image.type} alt='/' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
