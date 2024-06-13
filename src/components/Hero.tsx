import Image from 'next/image'
import React from 'react'
import herobanner from '../../public/asset/herobanner.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Hero = () => {
  return (

   
   
      // <div className='text-center mt-11'>
      //     <h1 className='font-bold text-7xl'> Shield Data From <br />Hacker Threats </h1>
      //     <p className='mt-9 text-xl'>The Ui Design System Powering The World. <br /> The New Ui Design System Powering the world</p>
      //     <button className=' mt-9 text-white border border-white py-4 px-6 rounded hover:bg-white  hover:text-black '>Get Started</button>
      // </div>
      <div className='mt-10 mb-20 mx-5'>
        <Image src={herobanner} alt='hero' />
      </div>
  )
}

export default Hero