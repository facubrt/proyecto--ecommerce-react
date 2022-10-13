# Ser Eucaristía - Tienda
### React JS - CODERHOUSE

**Ser Eucaristía - Tienda** es un e-commerse católico desarrollado con React JS. El mismo presenta productos ficticios obtenidos desde una base de datos NoSQL. Dentro de la página, es posible visualizar los productos en stock, filtrar los productos por categoría, visualizar el detalle de cada uno de ellos, agregarlos al carrito y efectuar una compra con la respectiva generación de la orden y el descuento del producto en la base de datos de la nube. Se trata de un proyecto real y funcional realizado a lo largo de la totalidad del cursado (8 semanas de duración).

## Tecnologías utilizadas
[![Chakra UI](https://img.shields.io/badge/Chakra%20Ui-02569B?style=for-the-badge&logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![React](https://img.shields.io/badge/React-02569B?style=for-the-badge&logo=react&logoColor=white)](https://es.reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-02569B?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)

## Instalación

Instalación del proyecto utilizando npm:
```
  git clone https://github.com/facubrt/proyecto--react-ecommerce.git
  npm install
  npm start
```

## Visualización
A continuación puede observarse un recorrido por la página web donde se muestran las diferentes pantallas y se lleva a cabo una compra con su correspondiente generación de orden en la base de datos.

![](https://media.giphy.com/media/AfNcc2vSmHat5fd9sq/giphy.gif)

## Modelado de datos
Los datos utilizados en este proyecto fueron modelados en una base de datos NoSQL utilizando colecciones y documentos. Los datos se distribuyen como sigue:

### products (collection)

```
product (document)

  {
    "id": "string",
    "name": "string",
    "category": "string",
    "description": "string",
    "stock": "number",
    "price": "number",
    "imgUrl": "string"
  }
  
  ```
### orders (collection)
```
   order (document)
     {
      "buyer": {
                "email": "string",
                "nombre": "string",
                "telefono": "string"
                },
        "cart": [{
                  "id": "string",
                  "name": "string",
                  "imgUrl": "string",
                  "price": "string",
                  "quantity": "number",
                  "stock": "number"
                }]
        "date": "timestamp",
        "total": "number",
      }
 ```
