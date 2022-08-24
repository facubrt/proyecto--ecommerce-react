import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Bienvenida from './components/Bienvenida';
import Producto from './components/Producto';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  let producto1 = {id: 1, name: 'zapatilla', price: 100};
  let producto2 = {id: 2, name: 'linterna', price: 200};

  let valorInicial = 4;

  return (
    <ChakraProvider>
      <NavBar/>
      {/* <Bienvenida/>
      <Producto item={producto1} color={'coral'} value={valorInicial}/>
      <Producto item={producto1} color={'blue'} value={valorInicial}/>
      <Footer/> */}
    </ChakraProvider>
  );
}

export default App;
