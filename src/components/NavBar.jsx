import React, { useState } from 'react'
import CartWidget from './CartWidget'
import { Flex, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function NavBar() {

    const [display, setDisplay] = useState('none')

    return (
        <>
            <Flex zIndex={20} position="fixed" px={['1rem', '1rem', '2rem', '2rem']} py="2rem" width="full" bg="white" alignItems="center" justifyContent="space-between">
                <HStack>
                    <IconButton aria-label='Open Menu'
                    onClick={() => setDisplay('flex')}
                        size='lg'
                        mr={2} icon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                    />

                    <Link to="/">
                        <Image
                            height='1.6rem'
                            objectFit='cover'
                            src='/assets/se-logotipo-osc-2022.png'
                            alt='logotipo'
                        />
                    </Link>
                </HStack>
                <Flex alignItems="flex-end">
                    <HStack display={['none', 'none', 'flex', 'flex']} color="#010224" spacing="40px">
                        <Link to="/categoria/stickers">
                            <Text fontSize='sm'>Stickers</Text>
                        </Link>
                        <Link to="/categoria/decoraciones">
                            <Text fontSize='sm'>Decoraciones</Text>
                        </Link>
                        <Link to="/categoria/colgantes">
                            <Text fontSize='sm'>Colgantes</Text>
                        </Link>
                    </HStack>

                </Flex>
                <CartWidget />

            </Flex>
            {/* menu hamburguesa */}
            <Flex
            display={display}
            px={['1rem', '1rem', '2rem', '2rem']}
                direction='column'
                alignItems='center'
                w='100vw'
                h='100vh'
                gap='2rem'
                pos='fixed'
                top='0'
                left='0'
                overflowY='auto'
                zIndex={1}
                bg="white"
            >
                <Flex
                    justify='flex-end'
                    w='full'
                >
                    <IconButton
                        aria-label='Close Menu'
                        onClick={() => setDisplay('none')}
                        size='lg'
                        mt={2}
                        mr={2} icon={<CloseIcon />}
                    />
                </Flex >
                <Flex gap='2rem' direction='column' align='center'>
                    <Link to="/categoria/stickers" onClick={() => setDisplay('none')}>
                        <Text fontSize='sm'>Stickers</Text>
                    </Link>
                    <Link to="/categoria/decoraciones" onClick={() => setDisplay('none')}>
                        <Text fontSize='sm'>Decoraciones</Text>
                    </Link>
                    <Link to="/categoria/colgantes" onClick={() => setDisplay('none')}>
                        <Text fontSize='sm'>Colgantes</Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}
