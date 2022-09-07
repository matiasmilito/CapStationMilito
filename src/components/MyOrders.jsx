import React from 'react'

const MyOrders = ({orders}) => {
  return (
    <div className='flex items-center p-2'>
        <p className='p-2 font-bold'>{orders.id}</p>
        <p className='p-2'>${orders.total}</p>
        <p className='p-2'>{orders.state ? <div className='bg-green-500 p-1 rounded-lg '>A retirar</div>  : <div className='bg-red-400 p-1 rounded-lg'>En proceso</div>}</p>
    </div>
  )
}

export default MyOrders