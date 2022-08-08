import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'


const ItemDetail = ({producto, count}) => {
  const [cart, setCart] = useState(false);
  const [cantidad, setCantidad] = useState();

  const onAdd = (count) => {
    swal({
        title: "Agregado!",
        text: `Se agregaron ${count} al carrito!`,
        icon: "success",
      })
    setCart(true);
}


  return (
    <div className='w-full h-screen bg-white flex items-center justify-center '>
      <div className='flex'>
        <div className='m-6'>
            <img src={producto.image} alt="itemdetail" className='h-[300px] rounded-xl'/>
        </div>
        <div className='flex flex-col items-center m-4 justify-center'>
            <div className='text-4xl font-bold'>{producto.title}</div>
            <div className='p-4 text-2xl'>{producto.description}</div>
            <div className='text-2xl font-bold p-4'>${producto.price}</div>
            {
              cart
                ? <Link to='/cart'><button className='p-[12px] text-black font-bold bg-yellow-400 rounded-xl text-center cursor-pointer w-auto text-2xl hover:bg-yellow-300'>Terminar compra</button></Link>
                : <ItemCount stock={producto.stock} onAdd={onAdd}/>
            }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail