import React from 'react';
import { features } from '../data';

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          {/* image */}
          <div className='flex-1 order-1 lg:-order-1'>
            <img className='rounded-[20px]' src={image.type} alt='/' />
          </div>
          {/* text */}
          <div className='flex-1 flex flex-col justify-end'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle font-semibold'>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
