import { CloseIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from '../../assets/icons/icon';
import Ratings from '../../assets/icons/ratings.svg';

const Modal = ({
  open,
  setOpen,
  mints,
  index,
  onAdd,
  onRemove,
  countCartItems,
}) => {
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(null)


  useEffect(() => {
    console.log(index);
    setProduct(mints[index]);
  }, [index]);


  const handleClick = () => {
    // product.qty=counter;
    // console.log(product);
    // onAdd(product);
    // console.log(product);
  };

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
            <div className="image-bg">
              <img src={product.image} alt="minty" />
            </div>
            <VStack as="form" className="right-item">
              <div>
                <h1>{product.name}</h1>
                <h2>{product.price}ETH</h2>
                <p className="gold">
                  All luxury items requires 2 weeks processing time as these are
                  custom made orders.
                </p>
              </div>
              <div>
                <h3>Average Rating</h3>
                <img src={Ratings} alt="ratings" />
              </div>
              <div>
                <h3>Gift Items</h3>
                <p>GUCCI 25H watch (Black), OnTheGo GM tote bag (Blue)</p>
              </div>
              <div>
                <h3>Creators</h3>
                <p>Gucci, Louis vuitton</p>
              </div>
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
                  <Button   onClick={handleAdd} className="brown">+</Button>
                </HStack>
              </VStack>
              <HStack>
                <Button
                  leftIcon={Box}
                  className="checkout"
                  onClick={() => handleClick}
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    width: 60vw;
    height: 70vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin: 0 20px;
    padding: 10px;
    font-size: 14px;
    color: #2c3e50;

    .image-bg {
      width: 324px;
      padding: 40px;
      background: #a15b34;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;
      border-radius: 30px;
    }
    .right-item {
      display: block;
      text-align: left;
      margin-left: 64px;
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
        margin-bottom: 15px;
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
        padding: 10px;
        gap: 10px;
        color: white;

        width: 80%;
        height: 52px;

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

  .deleteBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #fff;
    background: #ff3e4e;
    transition: all 0.25s ease;
  }

  .deleteBtn:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  }

  .cancelBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #2c3e50;
    background: #fcfcfc;
    transition: all 0.25s ease;
  }

  .cancelBtn:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }
`;

export default Modal;
