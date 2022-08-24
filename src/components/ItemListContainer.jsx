import { Box } from '@chakra-ui/react';
import React from 'react'
import Producto from './components/Producto';

export default function ItemListContainer({greeting}) {

    let producto1 = {id: 1, name: 'zapatilla', price: 100};
    let producto2 = {id: 2, name: 'linterna', price: 200};

  return (
    <Box>
       <h1>{greeting}</h1>
       <Producto item={producto1} color={'coral'} value={valorInicial}/>
      <Producto item={producto1} color={'blue'} value={valorInicial}/>
    </Box>
  )
}
