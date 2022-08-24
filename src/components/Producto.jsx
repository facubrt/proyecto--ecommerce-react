import React, { useState, useEffect } from 'react'

export default function Producto( {item, color, value} ) {
  console.log('render producto');

  const valorInicial = value;
  // HOOKS
  const [contador, setContador] = useState(valorInicial);

  // // MONTAJE - NACIMIENTO
  // useEffect (() => {
  //   //TODAS LAS LINEAS QUE QUIERO QUE SE HAGAN CUANDO NACE EL COMPONENTE
  //   console.log('nacio el componente // SE LLAMA SOLO UNA VEZ EN EL NACIMIENTO'); // SE EJECUTA UNA VEZ EN EL NACIMIENTO
  // }, [])

  // // ESTE SEGUNDO EJEMPLO NO LLEVA EL ARRAY FINAL []
  // useEffect (() => {
  //   console.log('esto se ejecuta en cada render // mientras viva el componente // NO IMPORTA QUIEN LO CAUSE'); // SE EJECUTA UNA VEZ POR RENDER
  // })

  // useEffect (() => {
  //   console.log('esto se ejecuta en cada render // mientras viva el componente // SOLO CONTADOR 1'); // SE EJECUTA UNA VEZ POR RENDER
  // }, [contador])

  // useEffect (() => {
  //   console.log('esto se ejecuta en cada render // mientras viva el componente // SOLO CONTADOR 2'); // SE EJECUTA UNA VEZ POR RENDER
  // }, [contador2])

  // CUANDO MUERE EL COMPONENTE O DESMONTA
  useEffect (() => {
    
    return () => {
      
    }
  }, [])

    return (
    <div>
        <h1>{item.name}</h1>
        <h2>{item.price}</h2>
        <h3>{item.id}</h3>
        <p>{contador}</p>
        <button
        onClick={() => {
          setContador(contador + 1);
        }}>
          Click
        </button>
    </div>
  )
}
