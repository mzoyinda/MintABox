import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import Home from './Home';
import "./App.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_PRIVATE_KEY)
  }, [])
  

  return (
    <ChakraProvider theme={theme}>
       <Home/>
    </ChakraProvider>
  );
}

export default App;
