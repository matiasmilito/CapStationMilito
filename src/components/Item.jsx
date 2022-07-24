import React from 'react'
import G1 from '../assets/gorra11.jpeg';
import G2 from '../assets/gorra22.jpeg';
import G3 from '../assets/gorra33.jpeg';
import G4 from '../assets/gorra44.jpeg';
import G5 from '../assets/gorra55.jpeg';
import G6 from '../assets/gorra66.jpg';
import ItemCount from './ItemCount';

const Item = ({image, title, price, description, stock}) => {
  return (
    <div className='hover:shadow-xl max-w-[300px] m-auto text-center mb-12 border rounded-xl'>
                            <img src={image} className='border rounded-t-xl'/>
                            <h1 className='font-bold text-2xl p-1'>{title}</h1>
                            <p className='text-gray-700 text-2xl'>${price}</p>
                            <p className='p-2'>{description}</p>
                            <ItemCount stock={stock}/>
                            {/* <p><button className='p-[12px] text-black font-bold bg-yellow-400 border rounded-b-xl text-center cursor-pointer w-full text-2xl hover:opacity-70'>Agregar al Carrito</button></p>                    */}
    </div>
  )
}

export default Item