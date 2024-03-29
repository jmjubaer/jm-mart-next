"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Pagination } from 'swiper/modules';

import image_1 from "@/assets/home/banner/slide1.jpg"
import image_2 from "@/assets/home/banner/slide2.jpg"
import image_3 from "@/assets/home/banner/slide3.jpg"
import Image from 'next/image';

const Banner = () => {
    return (
        <section className='h-screen jm_container_lg'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true} 
                // navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full h-screen bg-pink-300 relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
                            <h3 className='uppercase text-2xl font-medium'>Summer 2024</h3>
                            <h2 className='capitalize text-5xl font-bold my-3'>New Arrival Collection</h2>
                            <button className='primary_btn'>Explore Now</button>
                        </div>
                        <Image className='w-full h-screen object-cover' src={image_1} alt='banner image'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen bg-pink-300 relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
                            <h3 className='uppercase text-2xl font-medium'>Summer sale</h3>
                            <h2 className='capitalize text-5xl font-bold my-3'>Save up to 70%</h2>
                            <button className='primary_btn'>Explore Now</button>
                        </div>
                        <Image className='w-full h-screen object-cover' src={image_2} alt='banner image'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen bg-pink-300 relative">
                        <div className="absolute top-1/2 -translate-y-1/2 right-[5%] text-right">
                            <h3 className='uppercase text-2xl font-medium'>New Season</h3>
                            <h2 className='capitalize text-5xl font-bold my-3'>Lookbook collection</h2>
                            <button className='primary_btn'>Explore Now</button>
                        </div>
                        <Image className='w-full h-screen object-cover' src={image_3} alt='banner image'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;