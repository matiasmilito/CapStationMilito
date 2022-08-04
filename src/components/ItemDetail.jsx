import React from 'react'


const ItemDetail = ({producto}) => {
  return (
    <div className='w-full h-screen bg-yellow-400 flex items-center justify-center'>
      <div>
          <div>{producto.image}</div>
          <div>{producto.title}</div>
          <div>{producto.description}</div>
      </div>
    </div>
  )
}

export default ItemDetail