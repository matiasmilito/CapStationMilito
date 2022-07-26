import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import G1 from '../assets/gorra11.jpeg';
import G2 from '../assets/gorra22.jpeg';
import G3 from '../assets/gorra33.jpeg';
import G4 from '../assets/gorra44.jpeg';
import G5 from '../assets/gorra55.jpeg';
import G6 from '../assets/gorra66.jpg';
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setProducts([
                {   
                    id: 1,
                    image: G1,
                    title: "Adidas",
                    price: 2500,
                    description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
                    stock: 15
                },
                {   
                    id: 2,
                    image: G2,
                    title: "TNF",
                    price: 2200,
                    description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
                    stock: 20
                },
                {   
                    id: 3,
                    image: G3,
                    title: "NYC",
                    price: 3400,
                    description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
                    stock: 12
                },
                {   
                    id: 4,
                    image: G4,
                    title: "Smile",
                    price: 3100,
                    description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
                    stock: 3
                },
                {   
                    id: 5,
                    image: G5,
                    title: "Rockaway",
                    price: 2900,
                    description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
                    stock: 3
                },
                {   
                    id: 6,
                    image: G6,
                    title: "Surf",
                    price: 2300,
                    description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar",
                    stock: 5
                }
            ]);
        }, 2000)
        
    }, [])


    return (
        <div>
            <ItemList products={products}/>
        </div>
  )
}

export default ItemListContainer