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
        }, 2500);
    }, [])

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!productType) resolve(Products)
                else resolve(Products.filter(prod => prod.type.includes(productType)))
            }, 2500);
        })
        promise
        .then((response) => setProducts(response))
        .catch((err) => console.log(err));
    }, [productType])


    if (!loading){
        return <div className='flex items-center justify-center p-20'><ClipLoader /></div>
    }

    // if (!productType){
    //     return <h3 className='text-center text-4xl font-bold border-b-4 border-yellow-400 capitalize p-2 border-auto mb-6'>{productType}</h3>
    // }

    return (
        <div className='pt-[20px]'>
            {/* <h3 className='text-center inline-flex text-4xl font-bold border-b-4 border-yellow-400 capitalize p-2 border-auto ml-2 mb-6'>{productType}</h3> */}
            <ItemList products={products}/>
        </div>
  )
}

export default ItemListContainer