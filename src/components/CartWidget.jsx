import { Link, Flex, Icon, Text, Button } from '@chakra-ui/react'
import { BsCart } from 'react-icons/bs'
import React from 'react'

export default function CartWidget() {
  return (
    // <Link color="blue.900" background="#6393ff" p="8px 8px 4px 8px" borderRadius="6px">
    <Button rightIcon={<Icon as={BsCart} h="20px" w="20px" color='#f4f4f6'/>} background='#6393ff' variant='solid' _hover={{background: '#1a67ff'}}>
      <Text color='#f4f4f6'>0</Text>
    </Button>
    // <Flex alignItems="center" justifyContent="center" spacing="20px">
    // <Text color='#f4f4f6'>0</Text>
    //     <Icon as={BsCart} h="20px" w="20px" m="0px 8px" color='#f4f4f6'/>

    // </Flex>
    // </Link>
  )
}
