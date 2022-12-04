import { Button, Flex, HStack, Input, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import CartBox from '../../assets/icons/CartBox.svg';

import gadget1 from '../../assets/gadgets/1.png';
import gadget2 from '../../assets/gadgets/2.png';
import gadget3 from '../../assets/gadgets/3.png';

import bag1 from '../../assets/bags/1.png';
import bag2 from '../../assets/bags/2.png';

import pef1 from '../../assets/perfume/1.png';
import pef2 from '../../assets/perfume/2.png';

import jewel1 from '../../assets/jewel/1.png';
import jewel2 from '../../assets/jewel/2.png';

import Modal from '../Modal/Explore';
import { Box } from '../../assets/icons/icon';

const Shop = {
  gadgets: [
    { id:1, name: 'Apple iPhone 11 Pro', price: '0.02', image: gadget1 },
    { id:2, name: 'Macbook Air', price: '0.02', image: gadget2 },
    { id:3, name: 'Apple IPad', price: '0.02', image: gadget3 },
  ],
  bags: [
    { id:4, name: 'Shoulder leather bag', price: '0.02', image: bag1 },
    { id:5, name: 'Louis vuitton', price: '0.02', image: bag2 },
  ],
  perfume: [
    { id:6, name: 'Carolina Herrera perfume', price: '0.02', image: pef1 },
    { id:7, name: 'Tom Ford', price: '0.02', image: pef2 },
  ],
  jewellery: [
    { id:8, name: 'Butterfly detail cuff ring', price: '0.02', image: jewel1 },
    { id:9, name: 'Rhinestone earrings', price: '0.02', image: jewel2 },
  ],
};

const Card = ({ category, CartItems,onAdd, onRemove}) => {
    const inputRef = useRef(null);
    const [product, setProduct] = useState(null);

    let count = 1;

  useEffect(() => {
    // console.log(category);
  }, [category,product]);

  const handleRemove = (index) => {
    let counter = Math.floor( inputRef.current.value);
    console.log(counter)

    counter === 1 ? counter = 1 : counter = counter-1

    inputRef.current.value = counter;
  }

  const handleAdd = (index) => {
    let counter = Math.floor(inputRef.current.value);
    console.log(counter)

    counter === 10 ? counter = 10 : counter = counter+1

    inputRef.current.value = counter;
  }

  const handleClick = (index) => {

   const productCopy = Shop[category][index];

   setProduct(productCopy)

   console.log(productCopy);
    onAdd(product);
  };


  return (
    <Container>
      <h3>{category}</h3>
      <div className="cards">
        {Shop[category].map((item, index) => (
          <>
            <div className="card" key="index">
              <div className="image-bg">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="box">
                <p>{item.name}</p>
                <HStack>
                  <p className="price">{item.price} ETH</p>
                </HStack>
                <div  onClick={() => handleClick(index)}>
                    <Button className='add-to-box' leftIcon={Box}> Add to box</Button>
                  {/* <HStack>
                    <Button key={item.index} className="red" onClick= {() => handleRemove(index)} >
                      -
                    </Button>
                    <input
                    defaultValue = {count}
                    ref={inputRef}
                      name={item.name}
                      type="number"
                      disabled
                    />
                    <Button key={item.index} onClick={()=> handleAdd(index)} className="brown">
                      +
                    </Button>
                  </HStack> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 46px;
    text-transform: uppercase;
    margin-top: 99px;
    background: linear-gradient(92.7deg, #fdab64 -23.55%, #7d6256 96.24%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 32px;
  }

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 28px 20px;
    gap: 24px;
    width: 400px;
    height: 550.95px;
    background: #d9d9d9;
    border-radius: 20px;
    .image-bg {
      width: 290px;
      height: 254px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border-radius: 20px;
      img {
        width: 200px;
      }
    }
    input {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 10px 0px 10px;
      gap: 19px;

      width: 40px;
      height: 37px;

      border: 1px solid #d9d9d9;
    }

    .special {
      padding: 10px;
      gap: 10px;
      /* width: 250px; */
      height: 60px;
      font-weight: 600;
      font-size: 22px;
      line-height: 32px;
      padding-right: 0;
      color: black;
      background: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      :hover {
        cursor: pointer;
      }
      border-radius: 10px;
    }

    .add-to-box {
      padding: 10px;
      gap: 10px;
      width: 340px;
      height: 60px;
      font-weight: 600;
      font-size: 22px;
      line-height: 32px;
      color: #ffffff;
      background: linear-gradient(92.7deg, #fccba2 -23.55%, #a15b34 106.39%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.15s;
      :hover {
        cursor: pointer;
      }
      border-radius: 10px;
      svg path {
        fill: white;
        color: white;
      }
    }


    button {
        color: white;
      }
      .red {
        background-color: white;
        border: 1px solid red;
        color: red;
        :hover {
          background-color: red;
          opacity: 0.8;
          color: white;
        }
      }

      .brown {
        background-color: #a15b34;
        :hover {
          background-color: #a15b34;
          opacity: 0.8;
        }
      }

    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      margin-top: 40px;
      align-items: center;
      p {
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
      }
      .price {
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.025em;
      }
    }
  }
`;

export default Card;
