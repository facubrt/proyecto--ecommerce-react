import { Container } from '@chakra-ui/react';
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
    <Container maxW={"container.lg"}>
      {loading ? 'cargando productos...' : <ItemList items={items}/>}
    </Container>
  )
}
