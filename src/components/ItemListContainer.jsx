import { Box, Center, Container, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import ImageSlider from './ImageSlider';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const productos = category ? query(collection(db, "products"), where("category", "==", category)) : collection(db, "products")
    getDocs(productos).then((result) => {
      const lista = result.docs.map((product) => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setItems(lista)
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

  }, [category])

  return (
    <>
      <Box w="100%" p={4} color="white" pt="6rem">
        <ImageSlider/>
      </Box>
      <Heading textAlign={'center'} pt="4rem">
        {category ? category : 'Todos los productos' }
      </Heading>
      <Container py="4rem" maxW="full" maxH="full" >
        {loading
          ? <Center h='20rem'><Spinner alignSelf='center' size='xl' /></Center>
          : <ItemList items={items}
          />}
      </Container>
    </>
  )
}
