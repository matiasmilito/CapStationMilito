import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  


  if (cart.length === 0){
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <p className='text-center font-bold text-4xl p-4 sm:text-2xl'>No hay elementos en el carrito!</p>
        <div>
          <Link to='/'><button className='p-2 bg-yellow-400 rounded-md hover:bg-yellow-300 text-center text-2xl font-bold'>Volver al Home</button></Link>
        </div>
        
      </div>
    )
  }

  return (
    <div className='h-screen w-full'>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p className='flex justify-end font-bold p-4 pr-6'>Total: ${totalPrice()}</p>
      <div className='flex items-center justify-center'>
        <Link to='/checkout'>
          <button className='p-[12px] text-black font-bold bg-yellow-400 rounded-xl text-center cursor-pointer w-auto text-2xl hover:bg-yellow-300'>Terminar mi compra</button>
        </Link> 
      </div>
           
    </div>
  )
}

export default Cart