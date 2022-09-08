import { Button, color, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'

export default function Item({ item }) {

  const {imgUrl, name, description, price, stock, id} = item

  const navegar = useNavigate()

  return (
    <Container border={"2px"} borderColor={"blackAlpha.200"} borderRadius={"10px"} p={"1rem"} my={"1rem"} _hover={{
      borderColor: "#010224",
    }} >
      <Flex direction='column' gap='10px'>
      <Image
        height='400px'
        objectFit='cover'
        src={imgUrl}
      />
      <Heading as='h4' size='sm'>{name}</Heading>
      
      <Text fontSize='lg'>$ {price}</Text>
      {/* Navegacion con boton */}
      <Button alignSelf="center" rightIcon={<BsArrowRightShort size="1.4rem"/>} colorScheme='#010224' variant='outline' _hover={{
      background: "#010224",
      color: "#f4f4f6"
    }} onClick={() => navegar(`/product/${id}`)}>
      Ver producto</Button>
      </Flex>
    </Container>
  )
}
