import React from 'react';
import { products } from '../data';
import ProductsSlider from './ProductsSlider';

const Products = () => {
  const { title, subtitle } = products;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {/* slider */}
        <ProductsSlider />
      </div>
    </section>
  );
};

export default Products;
