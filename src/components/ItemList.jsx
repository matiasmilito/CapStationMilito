import React from 'react';
import Item from './Item';


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