import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({products}) => {

  const {productId} = useParams();

  const [producto, setProducto] = useState(null);

  const getProductById = (id) => {
    fetch(`../data/products.json/${id}`)
    .then(productsData => productsData.json())
    .then(data => setProducto(data))
  }

  useEffect(() => {
    getProductById(productId)
  }, [productId])


  return (
    <div>
        <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer