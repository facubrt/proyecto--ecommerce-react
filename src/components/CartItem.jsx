import { CloseIcon } from '@chakra-ui/icons'
import { Container, Divider, Flex, Heading, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiTrash } from 'react-icons/fi'
import { useCart } from '../context/CartContext'


export default function CartItem({ item }) {

  const { imgUrl, name, quantity, price, id } = item

  const { removeItem } = useCart()

  return (
    <Container maxW="container.lg" maxH="full">
      <Divider />
      <Flex direction='column'>
        <Flex justifyContent='space-between' alignItems='center' py="1rem" my="1rem">
          <HStack gap={4}>
            <Image
              height='50px'
              width='50px'
              objectFit='cover'
              src={imgUrl}
            />
            <Heading as='h4' size='sm'>{name}</Heading>
          </HStack>
          <HStack gap={8}>
          <Text fontSize='lg'>${price}</Text>
          <Text fontSize='lg'>x{quantity}</Text>
          <IconButton aria-label='remove item'
            onClick={() => removeItem(id)}
            size='sm'
            mr={2} icon={<CloseIcon />}
          />
          </HStack>
        </Flex>
      </Flex>
    </Container>
  )
}
