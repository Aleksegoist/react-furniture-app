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
            <div>
              {page.productList.map((product, index) => {
                const { image, name, price } = product;
                return (
                  <div>
                    <div>
                      <img src={image.type} alt='' />
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductsSlider;
