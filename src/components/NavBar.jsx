import React from 'react'
import CartWidget from './CartWidget'
import { Container, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Flex px="80px" py="20px" width="full" bg="#f4f4f6" alignItems="flex-end" justifyContent="space-between">
                <Link to="/">
                    <Image
                        height='1.6rem'
                        objectFit='cover'
                        src= '/assets/se-logotipo-osc-2022.png'
                        alt='logotipo'
                    />
                </Link>
            <Flex alignItems="flex-end">
                <HStack color="#010224" fontWeight='bold' spacing="40px">
                    <Link to="/categories">
                    <Text fontSize='sm'>Categorías</Text>
                    </Link>
                    <Link to="/about">
                    <Text fontSize='sm'>Acerca de</Text>
                    </Link>
                </HStack>
            </Flex>
            <CartWidget />
        </Flex>
    )
}
