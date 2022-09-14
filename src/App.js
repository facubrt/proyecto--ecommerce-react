import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Footer from './components/Footer';

import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from 'react';

export default function App() {

  const [color, setColor] = useState('dark');

  return (
    <ChakraProvider>
      {/* <contexto.Provider value={{ color, setColor }}> */}
        <BrowserRouter>
          {/* NAVBAR */}
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:category' element={<ItemListContainer />} />
            <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
          {/* FOOTER */}
          <Footer />
        </BrowserRouter>
      {/* </contexto.Provider> */}
    </ChakraProvider>
  );
}
