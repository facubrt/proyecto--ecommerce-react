import { Container, Divider, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({ itemDetail }) {

  const { name, description, category, price, stock, imgUrl, id } = itemDetail;
  const [contador, setContador] = useState(0);

  console.log(itemDetail)
  const onAdd = (value) => {
    setContador(contador + value);
  }

  return (
    <Container maxW={"full"} py={"4px"} my={"1rem"} >
      <HStack mx="4rem">
        <Image
          height='600px'
          objectFit='cover'
          src={imgUrl}
        />
        <VStack alignItems="start">
          <HStack alignItems="start" justifyContent="space-between" w="100%">
            <VStack alignItems="start">
              <Heading as='h1' size='md'>{name}</Heading>
              <Heading as='h2' size='xs' color={"blackAlpha.500"} my={"6px"}>{category}</Heading>
            </VStack>
            <Heading color="blackAlpha.800" fontWeight="normal" size='md'>$ {price}</Heading>
          </HStack>
          <ItemCount stock={stock} initial={contador} onAdd={onAdd} />
          <Divider />
          <Heading color="blackAlpha.500" size='dm'>Descripción</Heading>
          <Text>{description}</Text>
        </VStack>
      </HStack>
    </Container>
  )
}
