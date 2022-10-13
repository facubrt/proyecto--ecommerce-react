import { ArrowBackIcon } from '@chakra-ui/icons';
import { AspectRatio, Container, Divider, Flex, Heading, IconButton, Image, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({ itemDetail }) {

  const { name, description, category, price, stock, imgUrl, id } = itemDetail;
  const [count, setCount] = useState(1);
  const [localStock, setLocalStock] = useState(stock);
  const { cart, addItem, isInCart } = useCart()
  const navegar = useNavigate();

  useEffect(() => {
    if (isInCart(id)) {
      setLocalStock(stock - cart.filter((prod) => prod.id === id)[0].quantity);
    }
  }, [])

  const onAdd = () => {
    /* SE DEFINE LA COMPRA Y SE AGREGAN LOS PRODUCTOS AL CARRITO */
    let purchase = {
      id,
      name,
      price,
      stock,
      imgUrl,
      quantity: count,
    }
    addItem(purchase)
    setCount(1)
    setLocalStock(localStock - count)
  }

  return (
    <Container maxW={"full"} my={"6rem"} >
      <IconButton aria-label='Back'
        onClick={() => navegar(-1)}
        size='lg'
        my={4} icon={<ArrowBackIcon />}
      />
      <Flex direction={['column', 'column', 'row', 'row'] }
        justifyContent='center' alignItems='center' gap='8rem'>
        <AspectRatio ratio={1} minWidth = '40rem' >
          <Image
          borderRadius = '1rem'
            objectFit='cover'
            src={imgUrl}
          />
        </AspectRatio>
        <VStack alignItems="start">
          
            <VStack alignItems="start">
              <Heading as='h1'>{name}</Heading>
              <Heading as='h2' size='xs' color={"blackAlpha.500"} my={"6px"}>{category}</Heading>
              <Heading py='1rem 'color="blackAlpha.800" fontWeight="normal" size='md'>$ {price}</Heading>
            </VStack>
          <ItemCount stock={localStock} initial={1} onAdd={onAdd} count={count} setCount={setCount} setLocalStock={setLocalStock}/>
          <Divider />
          <Heading color="blackAlpha.500" size='dm'>Descripción</Heading>
          <Text>{description}</Text>
        </VStack>
      </Flex>
    </Container>
  )
}
