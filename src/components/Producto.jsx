import { Container, Heading, Text } from '@chakra-ui/react';
import React, { useState} from 'react'
import ItemCount from './ItemCount';

export default function Producto({ item, color}) {
  
  let stock = 8;
  const [contador, setContador] = useState(0);

  const onAdd = (value) => {
    setContador(contador + value);
  }

  return (
    <Container maxW={"container.lg"} border={"2px"} borderColor={"blackAlpha.200"} borderRadius={"10px"} py={"4px"} my={"1rem"} background={color}>
      <Heading as='h4' size='md'>{item.name}</Heading>
      <Heading as='h6' size='xs' color={"blackAlpha.500"} my={"6px"}>ID {item.id}</Heading>
      <Text fontSize='lg'>$ {item.price}</Text>
      <ItemCount stock={stock} initial={contador} onAdd={onAdd}/>
    </Container>
  )
}
