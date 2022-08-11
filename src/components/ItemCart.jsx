import React from 'react';
import { useCartContext } from '../context/CartContext';
import { BsTrash } from 'react-icons/bs';

const ItemCart = ({product}) => {
    const {removeItem} = useCartContext();

  return (
    <div className='flex border-b-2'>
        <div className='w-[25vw]'>
            <img src={product.image} alt={product.title} className='w-[20vw] rounded-xl shadow-lg m-2'/>
        </div>
        <div className='flex items-center'>
            <p className='p-2 font-bold w-[20vw] text-center'>{product.title}</p>
            <p className='p-2 w-[5vw] text-center'>{product.quantity}</p>
            <p className='p-2 w-[15vw] text-center'>${product.price}</p>
            <p className='p-2 w-[15vw] text-center'>${product.quantity * product.price}</p>
            <div className='w-[10vw] pl-4 text-center'>
                <button onClick={() => removeItem(product.id)} className='p-2 bg-yellow-400 rounded-md hover:bg-yellow-300 text-center'><BsTrash /></button>
            </div> 
        </div>
    </div>
  )
}

export default ItemCart