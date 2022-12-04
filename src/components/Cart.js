import { CloseIcon } from '@chakra-ui/icons';
import { Button, Checkbox, HStack, IconButton, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from '../assets/icons/icon';
import Custom from "../assets/custom.png"

const Modal = ({ open, setOpen, index, CartItems, onAdd, onRemove }) => {
  const [counter, setCounter] = useState(1)
  
  useEffect(() => {
    console.log(index);
  }, [index]);

  const handleRemove = () => {
    counter === 1 ? setCounter(1) : setCounter(counter-1)
  }

  const handleAdd = () => {
    counter === 5 ? setCounter(5) : setCounter(counter+1)
  }

  return (
    <Container>
    <div className="darkBG" onClick={() => setOpen(false)} />
    <div className="centered">
      <div className="modal">
        <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="Call Sage"
          fontSize="20px"
          className="closeBtn"
          onClick={() => setOpen(false)}
          icon={<CloseIcon />}
        />
        <div className="modalContent">
         
          <VStack as="form" className="right-item">
           <h2>GIFT CART</h2>
           <hr/>
           <p>1 item</p>
           <HStack justifyContent="center" gap="60px">  
            <div className='image-box'>
              <img src={Custom} alt="custom-box" />
            </div>
            <div>
              <h3>Custom Package</h3>
              <p>0.001 ETH</p>
                    
            <VStack 
            marginTop="15px"
            alignItems="flex-center"
            >
              <HStack>
                <h3>Quantity</h3>
                <p>(between 1 and 5) </p>
              </HStack>
              <HStack>
                <Button className="red"
                onClick={handleRemove}
                >-</Button>
                <input
                  value={counter}
                  type="number"
                  min="1"
                  max="5"
                  disabled
                />
                <Button   
                onClick={handleAdd}
                 className="brown">+</Button>
              </HStack>
            </VStack>
            </div>
           </HStack>
      
            <hr/>
            <div>
              <h3>Box Items </h3>
              {/* map items */}
           <p>Total-</p>
           <HStack margin="20px">
            <Checkbox/>
            <p>I agree with the Terms & conditions</p>
           </HStack>
             </div>
            <HStack justifyContent="center" >
              <Button
                className="continue"
                // onClick={handleClick}
              >
                Continue Shopping
              </Button>
              <Button
                leftIcon={Box}
                className="checkout"
                // onClick={handleClick}
              >
                Checkout
              </Button>
            </HStack>
          </VStack>
        </div>
      </div>
    </div>
  </Container>
  );
};

const Container = styled.section`
  z-index: 1;
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    position: absolute;
  }

  .centered {
    position: fixed;
    top: 5%;
    right: 10%;
  }

  .modal {
    width: 550px;
    height: 80vh;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalContent {
    width: 550px;
    margin: 0 40px;
    /* padding: 10px; */
    font-size: 14px;
    color: #2c3e50;

    .image-box {
      background: #FBCC57;
border-radius: 20px;
width: 207px;
/* padding: 10px; */
    }
    .right-item {
      display: block;
      text-align: left;
      /* margin-left: 64px; */
      margin-top: 20px;
      .gold {
        color: #e27211;
      }
      h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.025em;

        color: #423f3f;
      }
      h2 {
        margin: 0;
        font-weight: 600;
        font-size: 25px;
        margin-bottom: 8px;
        line-height: 117.5%;
        letter-spacing: 0.025em;
      }
      h3 {
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 0.025em;
      }
      div + div {
        margin-bottom: 25px;
      }
      input {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 10px 0px 10px;
        gap: 19px;

        /* width: 30px; */
        height: 37px;

        border: 1px solid #000000;
      }

     .checkout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        gap: 10px;
        color: white;

        /* width: 130px; */
        /* height: 52px; */

        background: #fd6464;
        border-radius: 4px;
        :hover {
          box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
          transform: translateY(-5px);
          background: #ff3e4e;
        }
        svg path {
          fill: white;
        }
      }
    }
  }

  

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    color: #2c3e50;
    background: white;
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;
  }

  .closeBtn:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }

`;

export default Modal;
