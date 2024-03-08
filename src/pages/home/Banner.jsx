import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Pagination } from 'swiper/modules';

import image_1 from "../../assets/home/slide1.jpg"
import image_2 from "../../assets/home/slide2.jpg"
import image_3 from "../../assets/home/slide3.jpg"

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
                            <button className='bg-black text-white px-8 py-2 hover:bg-[#56cfe1] duration-500'>Explore Now</button>
                        </div>
                        <img className='w-full h-screen object-cover' src={image_1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen bg-pink-300 relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
                            <h3 className='uppercase text-2xl font-medium'>Summer sale</h3>
                            <h2 className='capitalize text-5xl font-bold my-3'>Save up to 70%</h2>
                            <button className='bg-black text-white px-8 py-2 hover:bg-[#56cfe1] duration-500'>Explore Now</button>
                        </div>
                        <img className='w-full h-screen object-cover' src={image_2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen bg-pink-300 relative">
                        <div className="absolute top-1/2 -translate-y-1/2 right-[5%] text-right">
                            <h3 className='uppercase text-2xl font-medium'>New Season</h3>
                            <h2 className='capitalize text-5xl font-bold my-3'>Lookbook collection</h2>
                            <button className='bg-black text-white px-8 py-2 hover:bg-[#56cfe1] duration-500'>Explore Now</button>
                        </div>
                        <img className='w-full h-screen object-cover' src={image_3} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;