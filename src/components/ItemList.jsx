import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

export default function ItemList({ items }) {

  console.log(items)
  return (
    <>
      <Heading maxW={"container.lg"}>Productos</Heading>
      {items.map((item) => (<Item key={item.id} item={item} />))}
    </>
  )
}
