import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import Products from '../data/products.json';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import G5 from '../assets/gorra55.jpeg'



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const {productType} = useParams();

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);  
        }, 1000);
    }, [])

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (productType) {
            const queryFilter = query(queryCollection, where('categoryId', '==', productType))
            getDocs(queryFilter)
            .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection)
            .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [productType])


    if (!loading){
        return <div className='flex items-center justify-center p-20 h-screen'><ClipLoader /></div>
    }

    return (
        <div className='pt-[20px]'>
            <ItemList products={products}/>
        </div>
  )
}

export default ItemListContainer