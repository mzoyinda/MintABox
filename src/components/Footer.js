import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { Gmail, Linkedin, Twitter } from '../assets/icons/icon';

const Footer = () => {
  return (
    <Container>
      <Box className="blocks">
        <div className="block">
          <h3>Newsletter sign up</h3>
          <p>Sign up for new arrivals, offers and more</p>
          <HStack className="input-box">
            <input placeholder="Enteryour email address" />
            <Button>Subscribe</Button>
          </HStack>
        </div>
        <div className="line"></div>
        <div className="block">
          <h3>Quick links</h3>
          <p>Minted</p>
          <p>Custom made</p>
        </div>
        <div className="line"></div>
        <div className="block">
          <h3>Help Centre</h3>
          <p>FAQ</p>
          <p>Terms and conditions</p>
          <p>Privacy Policy</p>
          <p>About us</p>
          <p>Work with us</p>
        </div>
        <div className="line"></div>
        <div className="block contact">
          <h3>Contact us</h3>
          <p>+ 234 90 5848 595</p>
          <p>mintagift01@gmail.com</p>
          <HStack>
            {Linkedin}
            {Twitter}
            {Gmail}
          </HStack>
        </div>
      </Box>

      <Box className="copyright">
        <p>© 2022 MINTAGIFT INC.</p>
      </Box>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: 90px;
  height: 385px;
  background: #f9f1e9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .blocks {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 57px;

    h3 {
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;
      margin-bottom: 32px;
    }

    p + p,
    p + div {
      margin-top: 16px;
    }

    .input-box {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      height: 48px;
      border: 1px solid #696767;
      border-radius: 10px;

      input {
        padding: 0px 0px 0px 10px;
        width: 283px;
        background-color: transparent;
        outline: none;
        height: 48px;
      }

      button {
        width: 115px;
        height: 48px;
        color: white;
        background: #585151;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.02em;
      }
    }
/* 
    .line {
      width: 266px;
      height: 0px;
      left: 541.12px;
      top: 3577px;

      border: 1px solid #000000;
      transform: rotate(90deg);
    } */
  }

  .block{
    border-right:1px solid #000000 ;
    padding-right: 35px;
  }
  .contact {
    border: none;
  }
  .copyright {
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
  }
`;
export default Footer;
