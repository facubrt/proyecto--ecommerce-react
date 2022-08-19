import React from 'react'

export default function Producto( {item, color, alertHolaMundo} ) {

    alertHolaMundo();
    return (
    <div>
        <h1>{item.name}</h1>
        <h2>{item.price}</h2>
        <h3>{item.id}</h3>
    </div>
  )
}
