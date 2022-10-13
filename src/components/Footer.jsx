import { Center, Divider, Flex, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {

  return (
    <VStack as="footer" px="80px" py="20px" width="full" bg="#f3f3f3">
      <Flex direction={['column','column','row', 'row']} justifyContent="space-between"  alignItems = {["center", "center", "start", "start"]}py="20px" width="full" bg="#f3f3f3">
        <Link to="/">
          <Image display={['none', 'none', 'inline', 'inline']}
            height='8rem'
            objectFit='cover'
            src='/assets/isotipo-t-osc.png'
            alt='logotipo'
          />
        </Link>
        <Flex direction={['column', 'row', 'row', 'row']} wrap = 'wrap' alignItems={"start"} gap={["2rem", "4rem", "4rem", "4rem"]}>

        <VStack display="flex" alignItems="start">
          <Text w="full" fontSize='xs' fontWeight="bold">Social</Text>
          <Link href='https://www.instagram.com/sereucaristia/' isExternal>
            <Text fontSize='xs'>Instagram</Text>
          </Link>
          <Link href='https://www.facebook.com/sereucaristia' isExternal>
            <Text fontSize='xs'>Facebook</Text>
          </Link>
          <Link href='https://www.twitter.com/sereucaristia' isExternal>
            <Text fontSize='xs'>Twitter</Text>
          </Link>
          <Link href='https://t.me/sereucaristia' isExternal>
            <Text fontSize='xs'>Telegram</Text>
          </Link>
        </VStack>
        <VStack display="flex" alignItems="start">
          <Text w="full" fontSize='xs' fontWeight="bold">Proyectos</Text>
          <Link href='https://play.google.com/store/apps/details?id=com.sereucaristia' isExternal>
            <Text fontSize='xs'>Aplicación</Text>
          </Link>
          <Link href='https://open.spotify.com/show/7E8f2o8GWoTCz2wSguligJ?si=9c733f26077e40d4' isExternal>
            <Text fontSize='xs'>Podcast</Text>
          </Link>
          <Link href='https://medium.com/sereucaristia' isExternal>
            <Text fontSize='xs'>Cartas a vos</Text>
          </Link>
        </VStack>
        <VStack display="flex" alignItems="start">
          <Text w="full" fontSize='xs' fontWeight="bold">Descarga</Text>
          <Link href='https://play.google.com/store/apps/details?id=com.sereucaristia' isExternal>
          <Image
            height='2rem'
            objectFit='cover'
            src='/assets/google-play-badge-sm.png'
            alt='logotipo'
          />
          </Link>
          
        </VStack>
        </Flex>
      </Flex>
      <Divider />
      <Center>

      <Text w="full" fontSize='xs'>&copy; 2022 Ser Eucaristía</Text>
      </Center>
    </VStack>
  )
}
