"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay, Pagination } from 'swiper/modules';
import {useEffect, useState} from 'react'

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './testimonials.module.scss';
import Image from 'next/image';

const Reviews = ({reviews}) => {
  
  return (
    <div className={styles.swiper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay:3000,
            disableOnInteraction: false
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          998: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }}
        className={styles.mySwiper}
      >
        {reviews.map((item, i) => (
          <SwiperSlide className={styles.swiperSlide} key={i}>
                <Image src='/imgs/doubleQuaote.svg' className={styles.dbQuaote} width={30} height={30} alt=''/>
                <p className={styles.review}>{item.review}</p>
                <h4 className={styles.name}>{item.name}</h4>
                <h4 className={styles.role}>{item.role} <span>{item.location}</span></h4>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Reviews