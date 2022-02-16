import React from 'react';
import FilterProduct from '../../components/filterProduct/FilterProduct';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import Products from '../../components/products/Products';
import Toper from '../../components/toper/Toper';


export default function ProductList() {
  return (
      <>
          <Navbar />
            <Toper />
            <FilterProduct />
            <Products />
            <NewsLetter />
            <Footer />
      </>
  );
}
