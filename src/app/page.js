import Banner from '@/pages/home/Banner';
import BestSeller from '@/pages/home/BestSeller';
import HeroSection from '@/pages/home/HeroSection';
import Products from '@/pages/home/Products';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <HeroSection></HeroSection>
      <Products></Products>
      <BestSeller></BestSeller>
    </div>
  );
};

export default HomePage;