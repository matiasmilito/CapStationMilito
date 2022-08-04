import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {


  return (
    
    <div className='hover:shadow-xl max-w-[300px] m-auto text-center mb-12 border rounded-xl'>
                            <img src={producto.image} className='border rounded-t-xl'/>
                            <Link to={`/product/${producto.id}`}><h1 className='font-bold text-2xl p-1'>{producto.title}</h1></Link>
                            <p className='text-gray-700 text-2xl'>${producto.price}</p>
                            <p className='p-2'>{producto.description}</p>
                            <ItemCount stock={producto.stock}/>
    </div>
  
  )
}

export default Item