import { Link, Flex, Icon} from '@chakra-ui/react'
import { BsCart } from 'react-icons/bs'
import React from 'react'

export default function CartWidget() {
  return (
  <Link color="blue.900" background="white" p="8px 8px 4px 8px" borderRadius="6px">
    <Flex alignItems="center" justifyContent="center" spacing="20px">
        0
        <Icon as={BsCart} h="20px" w="20px" m="0px 8px" />

    </Flex>
</Link>
  )
}
