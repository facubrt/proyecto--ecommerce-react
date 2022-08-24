import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer';

function App() {



  //let valorInicial = 4;
  let greeting = 'Bienvenido';

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
