import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import Products from '../data/products.json';



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
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!productType) resolve(Products)
                else resolve(Products.filter(prod => prod.type.includes(productType)))
            }, 1000);
        })
        promise
        .then((response) => setProducts(response))
        .catch((err) => console.log(err));
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