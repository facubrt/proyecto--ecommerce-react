import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Bienvenida from './components/Bienvenida';
import Producto from './components/Producto';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  let producto1 = {id: 1, name: 'zapatilla', price: 100};
  let producto2 = {id: 2, name: 'linterna', price: 200};

  function alertHolaMundo () {
    return alert('hola mundo');
  }

  return (
    <ChakraProvider>
      <NavBar/>
      <Bienvenida/>
      <Producto item={producto1} color={'coral'} alertHolaMundo={alertHolaMundo}/>
      <Producto item={producto2} color={'coral'} alertHolaMundo={alertHolaMundo}/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
