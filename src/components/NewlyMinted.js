import { Box, Button, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Explore } from '../assets/icons/icon';
import Mint1 from '../assets/Mint1.png';
import Mint2 from '../assets/Mint2.png';
import Mint3 from '../assets/Mint3.png';
import Modal from './Modal/Explore';

const NewMints = [
  { id:1, name: 'Deluxe Package', price: '0.03', image: Mint1 },
  { id:2, name: 'Vintage Package', price: '0.04', image: Mint2 },
  { id:3, name: 'Paradise Package', price: '0.01', image: Mint3 },
];

const NewlyMinted = ({ onAdd, onRemove}) => {
  const [open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    console.log(isHovering);
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [open]);

  const handleMouseOver = e => {
    setIsHovering(true);
  };

  const handleMouseOut = e => {
    setIsHovering(false);
  };

  const handleClick = index => {
    setOpen(true);
    setIndex(index);
    console.log(index);
  };

  return (
    <Container open={open} id="minted">
      <h2>Newly Minted</h2>
      <Box className="cards">
        {NewMints.map((mint, index) => (
          <>
            <div
              className="card"
              key={index}
              as={Button}
              onClick={() => handleClick(index)}
              onMouseOver={() => handleMouseOver}
              onMouseOut={() => handleMouseOut()}
            >
              <div className="image-bg">
                <img src={mint.image} alt="box" />
                {/* {isHovering ? ( */}
                  <div className="explore">
                  
                    <Button
                    rightIcon={Explore}
                    >Explore</Button>
                  </div>
                {/* ) : ""} */}
              </div>
              <Box className="box">
                <p>{mint.name}</p>
                <HStack>
                  <p className="price">{mint.price} ETH</p>
                </HStack>
              </Box>
            </div>
            {open && (
              <Modal
                Open={open}
                setOpen={setOpen}
                mints={NewMints}
                onAdd={onAdd}
                onRemove={onRemove}
                index={Index}
              />
            )}
          </>
        ))}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 52px;
    margin-left: 90px;
    margin-bottom: 32px;
  }

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 140px;
    /* flex-wrap: wrap; */
  }
  .card {
    position: relative;
    width: 324px;
    transition: all 0.15s;
    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
    .image-bg {
      width: 371px;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #a25b34;
      border-radius: 30px;
      background-size: contain;
      background-repeat: no-repeat;
      img {
        padding: 32px;
        width: 325px;
      }
    }
    .love-box {
      display: flex;
      height: 40px;
      width: 40px;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      position: absolute;
      left: 83.33%;
      right: 4.32%;
      top: 3.77%;
      bottom: 86.79%;
      border-radius: 50%;
    }
    .box {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
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
    .explore {
      background-color: white;
      font-weight: 500;
      width: 100%;
      padding: 12px;
      font-size: 22px;
      text-align: center;
      box-shadow: 0 0 50px #ccc;
      line-height: 32px;
      /* border-bottom-left-radius: 30px; */
      border-bottom-right-radius: 30px;
      button{
        background:transparent;
        :hover{
          background:transparent;
        }
      }
    }
  }
`;

export default NewlyMinted;
