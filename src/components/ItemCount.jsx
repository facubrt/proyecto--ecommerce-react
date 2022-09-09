import { Button, Container, Flex, HStack, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function ItemCount({ stock, initial, onAdd }) {

  const [disableSubstractButton, setDisableSubstractButton] = useState(false);
  const [disableAddButton, setDisableAddButton] = useState(false);

  useEffect(() => {
    if (initial == 0) {
      setDisableSubstractButton(true);
    } else if (initial == stock) {
      setDisableAddButton(true);
    } else {
      setDisableAddButton(false);
      setDisableSubstractButton(false);
    }
  });

  return (
    <Flex direction="column" py="1.4rem" px="0px" gap="1rem">
      <HStack>
        <Button colorScheme='teal' variant='ghost' disabled={disableSubstractButton} onClick={() => onAdd(-1)}>
          <Icon as={FiMinus} h="20px" w="20px" m="0px 8px" />
        </Button>
        <p>{initial}</p>
        <Button colorScheme='teal' variant='ghost' disabled={disableAddButton} onClick={() => onAdd(1)}>
          <Icon as={FiPlus} h="20px" w="20px" m="0px 8px" />
        </Button>
      </HStack>
        <Button colorScheme='teal' variant='outline'>
          Agregar al carrito
        </Button>
    </Flex>
  )
}
