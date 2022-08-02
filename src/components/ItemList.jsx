import React from 'react';
import Item from './Item';
import G1 from '../assets/gorra11.jpeg';
import G2 from '../assets/gorra22.jpeg';
import G3 from '../assets/gorra33.jpeg';
import G4 from '../assets/gorra44.jpeg';
import G5 from '../assets/gorra55.jpeg';
import G6 from '../assets/gorra66.jpg';

const ItemList = ({products}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 top-0 pl-8 pr-8 pb-8 ml-8 mr-8'>
        {
            products.map((producto) => <Item key={producto.id} producto={producto}/>
            )
        }
    </div>
  )
}

export default ItemList