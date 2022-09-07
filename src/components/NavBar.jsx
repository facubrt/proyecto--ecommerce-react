import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Heading, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Flex px="200px" py="20px" width="full" bg="blue.900" alignItems="flex-end" justifyContent="space-between">
            <Flex alignItems="flex-end">
                <Link to="/">
                    <Heading color="white" mr="60px" fontSize={20} letterSpacing="1.5px">TiendaOnline</Heading>
                </Link>
                <HStack color="whiteAlpha.600" spacing="40px">
                    <Link to="/categories">Categorías</Link>
                    <Link to="/about">Acerca de</Link>
                </HStack>
            </Flex>
            <CartWidget />
        </Flex>
    )
}
