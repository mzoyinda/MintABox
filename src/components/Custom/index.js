import { Box, Button, Flex, HStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from '../../assets/gadgets.png';
import img2 from '../../assets/bags.png';
import img3 from '../../assets/perfume.png';
import img4 from '../../assets/jewellery.png';
import Card from './Card';

const image = [img1, img2, img3, img4];

const images = [
  {
    name: 'gadgets',
    image: img1,
  },
  {
    name: 'bags',
    image: img2,
  },
  {
    name: 'perfume',
    image: img3,
  },
  {
    name: 'jewellery',
    image: img4,
  },
];

const NewArrivals = ({CartItems,onAdd, onRemove}) => {
  const [category, setCategory] = useState('gadgets');

  useEffect(() => {
  console.log(category)

  }, [])
  

  return (
    <Container id="customized" >
      <h2>Customize your gift box</h2>
      <Box className="categories">
        {images.map(item => (
          <div className="image">
            <img 
                src={item.image} 
                alt="gifts categories"
                onClick={() => setCategory(item.name) }
            />
            <Box textAlign="center">
              <p>{item.name}</p>
            </Box>
          </div>
        ))}
      </Box>
      <Card category={category}
      CartItems={CartItems}
      onAdd={onAdd}
      onRemove={onRemove}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 80px;
  margin-top: 160px;
  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 52px;
    margin-bottom: 32px;
  }

  .categories {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    img {
      width: 200px;
      height: 200px;
      transition: all 0.15s;
 
 :hover {
   transform: scale(1.05);
   cursor: pointer;
 }
    }
    p {
      font-weight: 500;
      font-size: 24px;
      margin-top: 12px;
      line-height: 35px;
      text-align: center;
      letter-spacing: 0.025em;
      color: #233333;
    }
  }
`;

export default NewArrivals;
