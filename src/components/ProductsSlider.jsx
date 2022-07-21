import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
import { Navigation, Pagination } from 'swiper';
import { products } from '../data';
import { HiPlus } from 'react-icons/hi';

const ProductsSlider = () => {
  const { pages } = products;
  return (
    <Swiper>
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div>slide</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductsSlider;
