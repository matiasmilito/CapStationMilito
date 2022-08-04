import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Productos from '../data/products.json';


const ItemDetailContainer = () => {

  const {productId} = useParams(); 
  const [producto, setProducto] = useState([]);
  

  useEffect(() => {
    const getItem = new Promise(resolve => {
      setTimeout(() => {
        resolve(Productos);
      }, 500);
    });
    getItem.then(res => setProducto(res.find(productoD => productoD.id === parseInt(productId))));
  }, [])

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer