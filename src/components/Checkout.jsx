import React from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Checkout = () => {

    const {cart, clear, totalPrice} = useCartContext();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState('')

    const navigate = useNavigate()


    const order = {
        buyer: {
        name: name,
        email: email,
        phone: phone,
        address: address
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(
        ({id}) => swal({
            title: "Gracias por tu compra!",
            text: `Se orden de compra es ${id}!`,
            icon: "success",
          })
    )
    .then(clear)
    navigate('/')
  }

  return (
    <div className='w-full h-screen'>
        <p className='text-center p-4 font-bold'>
            Complete los campos!
        </p>
        <form className='flex flex-col items-center w-[70vw] m-auto'>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div  className='p-2'>
                <input type="number" className='border p-2 rounded-2xl' placeholder='Telefono' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Dirección' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
        </form>
        <div className='flex items-center justify-center p-4'>
            <button onClick={handleClick} className='p-[12px] text-black font-bold bg-yellow-400 rounded-xl text-center cursor-pointer w-auto text-2xl hover:bg-yellow-300'>Comprar</button>
        </div> 
    </div>
  )
}

export default Checkout