import { Button, Container, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Item({ item }) {

  const {imgUrl, name, description, price, stock, id} = item

  const navegar = useNavigate()

  return (
    <Container maxW={"container.lg"} border={"2px"} borderColor={"blackAlpha.200"} borderRadius={"10px"} py={"4px"} my={"1rem"} >
      <Image
        height='200px'
        objectFit='cover'
        src={imgUrl}
      />
      <Heading as='h4' size='md'>{name}</Heading>
      
      <Text fontSize='lg'>$ {price}</Text>
      {/* Navegacion con boton */}
      <Button colorScheme='teal' variant='outline' onClick={() => navegar(`/product/${id}`)}>
      Ver producto</Button>
    </Container>
  )
}
