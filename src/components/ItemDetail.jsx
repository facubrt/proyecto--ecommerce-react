import { Container, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({ itemDetail }) {
  
  const {name, description, price, stock, imgUrl, id} = itemDetail;
  const [contador, setContador] = useState(0);

  console.log(itemDetail)
  const onAdd = (value) => {
    setContador(contador + value);
  }

  return (
    <Container maxW={"container.lg"} border={"2px"} borderColor={"blackAlpha.200"} borderRadius={"10px"} py={"4px"} my={"1rem"} >
      <Image
        height='200px'
        objectFit='cover'
        src={imgUrl}
      />
      <Heading as='h4' size='md'>{name}</Heading>
      <Heading as='h6' size='xs' color={"blackAlpha.500"} my={"6px"}>ID {id}</Heading>
      
      <Text fontSize='lg'>$ {price}</Text>
      <Text>{description}</Text>
      <ItemCount stock={stock} initial={contador} onAdd={onAdd} />
    </Container>
  )
}
