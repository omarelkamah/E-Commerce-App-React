import React from 'react';
import Toper from '../../components/toper/Toper';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import Products from '../../components/products/Products';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
      <>
        <Toper />
        <Navbar />
        <Slider />
        <Category />
        <Products />
        <NewsLetter />
        <Footer />
      </>
      );
    };

export default Home;
