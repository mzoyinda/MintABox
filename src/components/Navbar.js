import { AddIcon, StarIcon } from '@chakra-ui/icons';
import { Badge, Button, HStack } from '@chakra-ui/react';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {Box} from '../assets/icons/icon';
import Cart from "../components/Cart";

const Navbar = ({account, setAccount,countCartItems, CartItems, onAdd, onRemove}) => {
  const [open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const [stickyStyle, setStickyStyle] = useState(false);

  const myRef = React.createRef();

  useEffect(() => {
    let sticky;
    if (myRef.current.offsetTop !== null) {
      sticky = myRef.current.offsetTop;
    }
    window.onscroll = () => {
      if (window.pageYOffset > sticky) {
        setStickyStyle(true);
      } else {
        setStickyStyle(true);
      }
    };
  }, [myRef]);

  const connectHandler = async () => {
      try {
        const { ethereum } = window;
  
        if (!ethereum) {
          alert("Please install MetaMask!");
          return;
        }
  
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
  
        console.log("Connected", accounts[0]);
      } catch (error) {
        console.log(error);
      }
}

useEffect(() => {
  open
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'unset');
    console.log(CartItems);
}, [open,CartItems]);

const handleClick = () => {
  setOpen(true);
  // setIndex(index);
  console.log(open);
};
  
  return (
    <Container ref={myRef} changeIt={stickyStyle}>
      <a href="/" className="logo">Mint'A'Box</a>
       <HStack gap="53px">
       <a href="#minted">Minted</a>
        <a href="#customized">Custom-made</a>
       </HStack>
      <HStack>
        
        <div
        as={Button} 
        onClick={handleClick}
        className={countCartItems ? 'badge-box' : ""}
        >
       {Box} 
      
        {countCartItems ? (
       <Badge className='badge'> {countCartItems} </Badge>
         ) : ""}
       </div>
       
        {account ? (
             <Button 
             className='connect-wallet' 
             onClick={connectHandler}
             leftIcon={<StarIcon/>
             } variant="solid">
            {account.slice(0, 6) + '...' + account.slice(38, 42)}
             </Button>
            ) : (
          <Button 
          className='connect-wallet' 
          onClick={connectHandler}
          leftIcon={<AddIcon/>
          } variant="solid">
            Connect Wallet
          </Button>
            )}
      </HStack>
      {open && (
              <Cart
                Open={open}
                setOpen={setOpen}
                onAdd={onAdd}
                // mints={NewMints}
                index={Index}
              />
            )}
    </Container>
  );
};

const Container = styled.nav`
display: flex;
position: sticky;
max-width: 3000px;
background: white;
justify-content: space-between;
align-items: center;
height: 77px;  

${({ changeIt }) =>
    changeIt &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2000;
      padding: 0 5%;
      /* padding-top: 10px;
      //padding-bottom: 3px;
      padding-left: 20px !important;
      padding-right: 20px !important; */
    `}
.logo{
/* width: 72px; */
font-weight: 600;
font-size: 30px;
margin-left: 34px;
text-align: center;
background: linear-gradient(92.7deg, #FDAB64 -23.55%, #7D6256 96.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.nav-block{
    display: flex;
 align-items: center;
 justify-content: center;
 font-weight: 500;
font-size: 18px;
line-height: 26px;
 a+a{
    margin-left: 61px;
 }
}
.badge-box{
  position: relative;
  :hover{
    cursor: pointer;
  }
}
.badge{
  position: absolute;
  top:-14px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width:20px;
  height: 20px;
  color: white;
  border-radius: 50%;
  /* right: 43.5vmin; */
  background: linear-gradient(92.7deg, #FDAB64 -23.55%, #7D6256 96.24%);
}

.connect-wallet{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
margin-right: 32px;
margin-left: 24px;
gap: 8px;
width: 214px;
height: 50px;
font-weight: 600;
font-size: 18px;
line-height: 26px;
color: #FFFFFF;
background: linear-gradient(92.7deg, #FDAB64 -23.55%, #7D6256 96.24%);
border-radius: 8px;
:hover{
  color: #FFFFFF;
background: linear-gradient(92.7deg, #FDAB64 -23.55%, #7D6256 96.24%);
opacity: 0.8;
}
}
`;

export default Navbar;
