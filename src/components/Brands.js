import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { Love, Price } from '../assets/icons/icon';
import Brand1 from '../assets/brand1.png';
import Brand2 from '../assets/brand2.png';
import Brand3 from '../assets/brand3.png';
import Brand4 from '../assets/brand4.png';
import Brand5 from '../assets/brand5.png';

const NewBrands = [Brand1, Brand2, Brand3, Brand4, Brand5];

const Brands = () => {
  return (
    <Container>
      <h2>Our Partners</h2>
    <Box className="cards">
        <div className="card">
        {NewBrands.map(brand => (
         <img src={brand} alt="brands" />
         ))}
         </div>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 110px;
  
  h2 {
    margin-left: 90px;
    text-align: center;
    font-weight: 500;
    font-size: 40px;
    line-height: 58px;
    margin-bottom: 32px;
    background: linear-gradient(92.7deg, #fdab64 -23.55%, #7d6256 106.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .cards{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
      width: 901px;
    gap: 91px;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    img{
      width: 105px;
      object-fit: cover;
    }
  }
`;

export default Brands;
