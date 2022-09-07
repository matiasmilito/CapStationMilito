import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext';


const ItemDetail = ({producto, count}) => {
  const [cart1, setCart1] = useState(false);
  
  const {addItem} = useCartContext();

  const onAdd = (count) => {
    swal({
        title: "Agregado!",
        text: `Se agregaron ${count} al carrito!`,
        icon: "success",
      })
    setCart1(true);
    addItem(producto, count);
}


  return (
    <div className='w-full h-screen pt-[40px] bg-white flex items-center justify-center'>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 m-4'>
        <div className='m-auto pt-4'>
            <img src={producto.image} alt="itemdetail" className='h-[300px] rounded-xl shadow-lg'/>
        </div>
        <div className='flex flex-col items-center m-4 justify-center'>
            <div className='text-4xl font-bold'>{producto.title}</div>
            <div className='p-4 text-2xl text-center'>{producto.description}</div>
            <div className='text-2xl font-bold p-4'>${producto.price}</div>
            {
              cart1
                ? <Link to='/cart'><button className='p-[12px] text-black font-bold bg-yellow-400 rounded-xl text-center cursor-pointer w-auto text-2xl hover:bg-yellow-300'>Terminar compra</button></Link>
                : <ItemCount stock={producto.stock} onAdd={onAdd}/>
            }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail