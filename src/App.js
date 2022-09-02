import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      {/* NAVBAR */}
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer/>}/>
          <Route exact path='/product/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        {/* FOOTER */}
        <Footer/>
      </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
