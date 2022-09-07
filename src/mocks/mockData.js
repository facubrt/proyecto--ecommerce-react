let itemsMock = [
  { id: 100, name: 'Las olas (Ángel Gargiulo + El Gato y La Caja)', description: '¿Qué nos dice la ciencia sobre las emociones? ¿Qué protocolos son efectivos para mejorar nuestro bienestar? Un libro de salud mental basado en evidencia que recorre las respuestas más recientes a estas preguntas escrito por Ángel Gargiulo y editado por El Gato y la Caja. ', stock: 12, price: 100, imgUrl: 'https://abrecultura.s3.amazonaws.com/media/dcfd8a384984a8f7af137999c762ac7c840c21f6_1657734327.png' },
  { id: 101, name: 'Libro de la vida (Jimena Barbeito + EGLC)', description: 'En este libro, Jimena Barbeito cruza estudios antropológicos, historia y biología evolutiva para ensayar una respuesta sobre qué es la vida, y en especial, qué es la vida humana. Un sistema que se reproduce, se mantiene y construye a sí mismo en interacción con el medio que lo rodea. Ideal para personas interesadas en biología, antropología o ciencia en general.', stock: 30, price: 200, imgUrl: 'https://abrecultura.s3.amazonaws.com/media/00f402ed58d3e5a7bdf550e8380a19c8a8d0deec_1633115674.png'  },
  { id: 102, name: 'La pausa (Juan Cruz Balian)', description: 'Perros salvajes amenazan poblaciones frágiles. Hacia el sur, donde el sol pierde fuerza, se encamina Leila, una cazadora ameteur. Con una carabina vieja y cinco balas, pretende reconstruirse en los bordes de un mundo que llega a su fin.', stock: 10, price: 300, imgUrl: 'https://abrecultura.s3.amazonaws.com/media/9b2a0e99578d4e84bd8469e6c60908e0912256c6_1656557392.png'  }
];

export const data = new Promise((res, rej) => {
  let condition = true
  setTimeout(() => {
    if(condition) {
      res(itemsMock);
    } else {
      rej('algo salió mal')
    }
  }, 2000);
})