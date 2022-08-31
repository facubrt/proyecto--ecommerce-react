import { Box, Container } from '@chakra-ui/react';
import React from 'react'
import Producto from '../components/Producto';
import SectionTitle from './SectionTitle';

export default function ItemListContainer({greeting}) {

  let valorInicial = 4;
  let producto1 = {id: 1, name: 'zapatilla', price: 100};
  let producto2 = {id: 2, name: 'linterna', price: 200};
  const title = 'Productos';

  return (
    <Container maxW='container.lg' p={"6"}>
      <SectionTitle title={title}/>
      <Producto item={producto1}/>
      <Producto item={producto2}/>
    </Container>
  )
}
