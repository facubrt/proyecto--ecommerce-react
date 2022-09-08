import { Center, Container, Flex, Progress, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import {data} from '../mocks/mockData'

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    data.then((res) => {
      setItems(res);
      setLoading(false);
    });

  }, [])

  return (
    <Container maxW="full" maxH="full">
      {/* Luego se puede cambiar la carga por shimmer loader */}
      {loading 
        ? <Center h='20rem'><Spinner alignSelf='center'   size='xl' /></Center>
        : <ItemList items={items}
      />}
    </Container>
  )
}
