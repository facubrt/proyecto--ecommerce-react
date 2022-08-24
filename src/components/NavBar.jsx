import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Heading, HStack, Link} from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Flex px="200px" py="20px" width="full" bg="blue.900" alignItems="flex-end" justifyContent="space-between">
            <Flex alignItems="flex-end">
                <Heading color="white" mr="60px" fontSize={20} letterSpacing="1.5px">TiendaOnline</Heading>
                <HStack color="whiteAlpha.600" spacing="40px">
                    <Link>Inicio</Link>
                    <Link>Categorías</Link>
                    <Link>Acerca de</Link>
                </HStack>
            </Flex>
            <CartWidget/>
        </Flex>
    )
}
