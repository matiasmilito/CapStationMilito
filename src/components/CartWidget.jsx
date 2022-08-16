import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const CartWidget = () => {
  const {totalCount} = useCartContext();

  return (
    <div className='flex items-center'>
      <Link to='/cart'>
          <FaShoppingCart />
      </Link>
      <span className='p-1'>{totalCount() || ''}</span>
    </div>
  )
}

export default CartWidget