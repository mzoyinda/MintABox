import { Box } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import GiftBox from '../assets/icons/giftBox.svg';
import Star from '../assets/icons/Star.svg';
import Wallet from '../assets/icons/Wallet.svg';

const Values = () => {
  return (
    <Container>
      <Box className="box">
        <img src={GiftBox} alt="gift-box" />
        <h3>Buy/ Customize a Gift box</h3>
        <p>
          Easily pick a gift box from our minted categories or just customze a
          gift box for your loved one !
        </p>
      </Box>
      <Box className="box">
        <img src={Wallet} alt="wallet" />
        <h3>Pay with your wallet</h3>
        <p>
          Connect your wallet and you can pay with your blockchain wallet with
          no worries
        </p>
      </Box>
      <Box className="box">
        <img src={Star} alt="star" />
        <h3>You get what you order for</h3>
        <p>
        You get an original copy from the original creator of every gift piece you pick!
        </p>
      </Box>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  margin-top: 166px;
  margin-bottom:160px ;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 0px;
  margin-bottom: 110px;


  .box{
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 355px;
    justify-content: center;
    align-items: center;

    p{
      font-weight: 400;
font-size: 20px;
/* width: 83%; */
line-height: 29px;
    }
    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 35px;
      color: #333333;
      margin:16px auto;
    }
  }
  
  .box+.box{
    margin-left: 20px;
  }
`;
export default Values;
