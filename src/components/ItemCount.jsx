import { Button, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ItemCount({ stock, initial, onAdd, count, setCount, setLocalStock }) {

  const [disableSubstractButton, setDisableSubstractButton] = useState(false);
  const [disableAddButton, setDisableAddButton] = useState(false);
  const { cart } = useCart()

  const navegar = useNavigate()

  useEffect(() => {
    if (count === initial) {
      setDisableSubstractButton(true);
    } else if (count === stock) {
      setDisableAddButton(true);
    } 
    else {
      setDisableAddButton(false);
      setDisableSubstractButton(false);
    }
  }, [count, initial, stock]);

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  return (
    <Flex direction="column" py="1.4rem" px="0px" gap="1rem">
      <HStack>
        <Button colorScheme='gray' variant='ghost' disabled={disableSubstractButton} onClick={restar}>
          <Icon as={FiMinus} h="20px" w="20px" m="0px 8px" />
        </Button>
        <HStack>

          <Text>{count}</Text>
          <Text color='blackAlpha.400'>({stock} disponibles)</Text>
        </HStack>
        <Button colorScheme='gray' variant='ghost' disabled={disableAddButton} onClick={sumar}>
          <Icon as={FiPlus} h="20px" w="20px" m="0px 8px" />
        </Button>
      </HStack>
      {/* SE AGREGA AL BOTON SUMAR CARRITO UN REINICIO DE CONTADOR, PENSANDO QUE POSTERIORMENTE ESTE BOTON DEBERÍA ENVIAR A CARTWIDGET EL OBJETO A COMPRAR Y LA CANTIDAD */}
      <HStack>
        <Button colorScheme='gray' onClick={() => onAdd()} display={(stock < count) 
          ? 'none' : 'flex'}>
          Agregar al carrito
        </Button>
        <Button background='#6393ff' variant='solid' color='#f4f4f6' _hover={{background: '#1a67ff'}} onClick={() => navegar('/cart')} display={cart.length
          ? 'flex' : 'none'} >Ir al carrito</Button>
      </HStack>
    </Flex>
  )
}
