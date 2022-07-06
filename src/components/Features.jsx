import React from 'react';
import { features } from '../data';

const Features = () => {
  const { title, subtitle, image, buttonText, items } = features;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div>
          <img src={image.type} alt='/' />
        </div>
      </div>
    </section>
  );
};

export default Features;
