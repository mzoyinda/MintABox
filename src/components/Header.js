import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Gifts from '../assets/gifts.png';
import Banner from '../assets/banner.png';

const Header = ({
  account,
  setAccount,
  countCartItems,
  CartItems,
  onAdd,
  onRemove,
}) => {
  return (
    <Container>
      <Navbar
        account={account}
        setAccount={setAccount}
        CartItems={CartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        countCartItems={countCartItems}
      />
      <Box className="hero-section">
        <div className="block-1">
          <h1>Specially Minted Gift Boxes</h1>
          <p>
            Share a gift box with your loved ones on their special day, and get
            it delivered right at their door step.
          </p>
          <Box className="get-started" textAlign="left">
            {' '}
            <a href="#minted">Get started</a>
          </Box>
        </div>
        <HStack className="block2">
          <img src={Banner} className="banner" alt="banner" />
          <img src={Gifts} className="gifts" alt="gifts" />
        </HStack>
      </Box>
    </Container>
  );
};

const Container = styled.header`
  .hero-section {
    min-height: 750px;
    background: #f9f1e9;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .block-1 {
      width: 499px;
      margin-left: 32px;
      height: 222px;
      text-align: left;
      h1 {
        font-weight: 600;

        font-size: 40px;
        line-height: 58px;
        color: #000000;
      }
      p {
        margin: 27px auto;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
      }
      .get-started {
        padding: 10px;
        gap: 10px;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        line-height: 29px;
        color: #ffffff;
        width: 214px;
        height: 52px;
        background: linear-gradient(92.7deg, #fdab64 -23.55%, #7d6256 96.24%);
        border-radius: 8px;
      }
    }

    .block2 {
      width: 739px;
      margin-right: 32px;

      .banner {
        position: absolute;
        left: 36vw;
        top: 90.76px;
        height: 638px;
        @media (min-width: 2000px) {
          left: 40vw;
        }
      }
    }

    button {
    }
  }
`;

export default Header;
