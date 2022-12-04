import React, { useState } from 'react';
// import Brands from './components/Brands';
import Footer from './components/Footer';
// import Gallery from './components/Gallery';
import Header from './components/Header';
import NewCategories from './components/NewlyMinted';
import Values from './components/Values';
import Custom from './components/Custom';
import Brands from './components/Brands';
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

const Home = () => {
  const [account, setAccount] = useState('');
  const [CartItems, setCartItems] = useState([]);

  const onAdd = product => {
    const exist = CartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        CartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...CartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = product => {
    const exist = CartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(CartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(
        CartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Container>
      <Box className="box">
        <Header
          account={account}
          setAccount={setAccount}
          CartItems={CartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={CartItems.length}
        />
        <Values />
        <NewCategories onAdd={onAdd} onRemove={onRemove} />
        <Custom
        CartItems={CartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        />
        <Brands />
        <Footer />
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    max-width: 3000px;
  }
`;

export default Home;
