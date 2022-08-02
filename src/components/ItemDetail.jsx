import React from 'react'


const ItemDetail = ({producto}) => {
  return (
    <div className='hover:shadow-xl max-w-[300px] m-auto text-center mb-12 border rounded-xl'>
                            <img src={producto.image} className='border rounded-t-xl'/>
                            <h1 className='font-bold text-2xl p-1'>{producto.title}</h1>
                            <p className='text-gray-700 text-2xl'>${producto.price}</p>
                            <p className='p-2'>{producto.description}</p>
                            {/* <p><button className='p-[12px] text-black font-bold bg-yellow-400 border rounded-b-xl text-center cursor-pointer w-full text-2xl hover:opacity-70'>Agregar al Carrito</button></p>                    */}
    </div>
  )
}

export default ItemDetail