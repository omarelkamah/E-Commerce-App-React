import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import SingleProduct from '../../components/singleProduct/SingleProduct';
import Toper from '../../components/toper/Toper';

const Container = styled.div`

`;

export default function ProductPage() {
  return (
      <Container>
          <Navbar />
          <Toper />
          <SingleProduct />
          <NewsLetter />
          <Footer />
      </Container>
  );
}
