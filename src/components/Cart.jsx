import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();


  if (cart.length === 0){
    return (
      <div className='h-screen'>
        <p className=''>No hay elementos en el carrito</p>
      </div>
    )
  }

  return (
    <div className='h-screen w-full'>
      <div className='flex pt-2 font-bold border-b-2'>
        <p className='w-[40vw] text-center'>Producto</p>
        <p className='w-[12vw] text-center'>Cant</p>
        <p className='w-[15vw] text-center'>Precio</p>
        <p className='w-[15vw] text-center'>Subtotal</p>
      </div>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p className='flex justify-end font-bold p-4 pr-6'>Total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart