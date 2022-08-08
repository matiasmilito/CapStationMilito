import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
      <Link to='/cart'>
          <FaShoppingCart />
      </Link>
    </div>
  )
}

export default CartWidget