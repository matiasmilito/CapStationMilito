import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {


  return (
    
    <div className='hover:shadow-xl max-w-[300px] m-auto text-center mb-12 border rounded-xl'>
                            <Link to={`/product/${producto.id}`}><img src={producto.image} className='rounded-t-xl'/></Link>
                            <Link to={`/product/${producto.id}`}><h1 className='font-bold text-2xl p-1'>{producto.title}</h1></Link>
                            <p className='text-gray-700 text-2xl pb-2'>${producto.price}</p>
                            <Link to={`/product/${producto.id}`}><button className='p-[12px] text-black font-bold bg-yellow-400 rounded-b-xl text-center cursor-pointer w-full text-2xl hover:bg-yellow-300'>Ver Detalles</button></Link>
                            {/* <ItemCount stock={producto.stock}/> */}
    </div>
  
  )
}

export default Item