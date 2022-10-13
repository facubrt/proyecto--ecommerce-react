import React, { useState } from 'react'
import { Button, Center, Container, Flex, FormControl, Heading, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import { useCart } from '../context/CartContext';
import { addDoc, collection, getDocs, getFirestore, query, where, writeBatch} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Order() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [idCompra, setIdCompra] = useState('');
  const [loading, setLoading] = useState(false);
  const navegar = useNavigate()

  const { cart, clear, cartTotal } = useCart()

  async function terminarCompra(e) {
    e.preventDefault();
    setLoading(true)
    const db = getFirestore();
    
    if (!name || !phone || !email) {
      return
    }

    let order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      cart: cart,
      date: new Date(),
      total: cartTotal(),
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db, 'orders')
    const productsRef = collection(db, 'products')

    const docs = query(productsRef, where('id', 'in', cart.map(item => item.id.toString())))

    const products = await getDocs(docs)

    const sinStock = []

    products.docs.forEach((doc) => {
      const itemInCart = cart.find(item => item.id === doc.id)
      console.log(doc.data().stock)
      console.log(itemInCart.stock)
      if (doc.data().stock >= itemInCart.stock) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.quantity
        })
      } else {
        sinStock.push(itemInCart)
      }
    })

    if (sinStock.length === 0) {
      batch.commit()
        .then(() => {
          addDoc(ordersRef, order)
            .then((doc) => {
              setIdCompra(doc.id)
              clear()
            })
            .catch((error) => {
              console.log(error)
            })
            .finally(() => {
              setLoading(false)
            })

        })
    } else {

      alert("Hay items sin stock")
      console.log(sinStock)
    }
  }

  return (
    <Container maxW={"full"} py="10rem">
      <Flex justifyContent={"center"} alignItems={"center"}>
        {!idCompra
          ?
          <form action="submit" onSubmit={terminarCompra}>
            <VStack maxW={"lg"} gap={"10px"}>
              <Heading size='lg'>Ingresa tus datos para finalizar</Heading>
              <FormControl isRequired>
                <Input value={name} onChange={(e) => setName(e.target.value)} variant='filled' placeholder='Ingresa tu nombre' size='md' type={'text'} />
              </FormControl>
              <FormControl isRequired>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} variant='filled' placeholder='Ingresa tu correo' size='md' type={'email'} />
              </FormControl>
              <FormControl isRequired>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} variant='filled' placeholder='Ingresa tu teléfono' size='md' type={'number'} />
              </FormControl>

              {loading 
              ? <Center h='20rem'><Spinner alignSelf='center' size='xl' /></Center>
              : <Button type={'submit'} alignSelf="center" p={"10px"} size="1.4rem" colorScheme='#010224' variant='outline' _hover={{
                background: "#010224",
                color: "#f4f4f6"
              }} >
                Terminar compra</Button>}
            </VStack>
          </form>
          : <Flex direction='column' align='center' gap={10}>
            <Heading size='lg'>¡Gracias por tu compra!</Heading>
            <Text fontSize='lg'>Tu orden se registró correctamente con el id: {idCompra}</Text>
            <Button background='#6393ff' color='#ffffff' onClick={() => navegar('/')} _hover={{ background: '#1a67ff' }} my="2rem">Volver a la tienda</Button>
          </Flex>}
      </Flex>
    </Container>
  )
}
