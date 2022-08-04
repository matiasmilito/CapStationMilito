import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {
  return (
    <div className='w-full h-screen bg-yellow-400 flex items-center justify-center '>
      <div className='flex'>
        <div>
            <img src={producto.image} alt="itemdetail" className='h-[300px] rounded-xl'/>
        </div>
        <div className='flex flex-col items-center m-4 justify-center'>
            <div className='text-4xl font-bold'>{producto.title}</div>
            <div className='p-4 text-2xl'>{producto.description}</div>
            <div className='text-2xl font-bold p-4'>${producto.price}</div>
            <ItemCount stock={producto.stock} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail