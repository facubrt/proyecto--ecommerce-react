import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Center, Container, Divider, Flex, Heading, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'
import CartItem from './CartItem';

export default function Cart() {

  const { cart, cartQuantity, clear, cartTotal } = useCart()

  const navegar = useNavigate()

  return (
    <Container maxW="container.lg" py="6rem" px='0rem' >
      {!cart.length
        ? <Center>
          <Flex direction='column'>
            <Text fontSize='2xl' my="1rem">Tu carrito está vacío</Text>
            <Button background='#6393ff' color='#ffffff' onClick={() => navegar('/')} _hover={{ background: '#1a67ff' }} my="2rem">Volver a la tienda</Button>
          </Flex>
        </Center>
        : <Flex px='2rem' direction='column'>
          <Flex mb='2rem' alignItems='center' justifyContent='space-between'>
            <HStack gap={4}>

              <IconButton aria-label='Back'
                onClick={() => navegar(-1)}
                size='lg'
                w='2rem'
                my={4} icon={<ArrowBackIcon />}
              />
              <Heading >Carrito de compras</Heading>
            </HStack>
            <Text fontSize='lg' p={0} m={0}>{cartQuantity()} items</Text>
          </Flex>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Divider />
          <Text py='2rem' fontSize='lg'>Total a pagar: ${cartTotal()}</Text>
          <Flex gap={8} justify='center'>
            <Button colorScheme='gray' my="2rem" onClick={clear}>Vaciar Carrito</Button>
            <Button background='#6393ff' onClick={() => navegar(`/order`)} color='#ffffff' _hover={{ background: '#1a67ff' }} my="2rem">Terminar Compra</Button>
          </Flex>

        </Flex>

      }
    </Container>
  )
}
