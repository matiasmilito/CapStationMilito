import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Productos from '../data/products.json';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

  const {productId} = useParams(); 
  const [producto, setProducto] = useState([]);
  

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', productId);
    getDoc(queryDoc)
      .then(res => setProducto({id: res.id, ...res.data()}))
  }, [productId])

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer