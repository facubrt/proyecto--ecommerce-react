import { AspectRatio, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'

export default function Item({ item }) {

  const {imgUrl, name, price, id} = item

  const navegar = useNavigate()

  return (
    <Container p={"1rem"} my={"1rem"} _hover={{
      background: "#f3f3f3",
      borderRadius: "1rem"
    }} >
      <Flex direction='column' gap='10px'>
      <AspectRatio ratio={1} minWidth = '10rem' >
      <Image
        borderRadius = '1rem'
        objectFit='cover'
        src={imgUrl}
      />
      </AspectRatio>
      <Heading as='h4' size='sm'>{name}</Heading>
      
      <Text fontSize='lg'>${price}</Text>
      {/* Navegacion con boton */}
      <Button alignSelf="center" rightIcon={<BsArrowRightShort size="1.4rem"/>} colorScheme='#010224' variant='outline' _hover={{
      background: "#010224",
      color: "#f4f4f6"
    }} onClick={() => navegar(`/producto/${id}`)}>
      Ver producto</Button>
      </Flex>
    </Container>
  )
}
