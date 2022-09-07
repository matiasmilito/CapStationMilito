import React, { useEffect, useState } from 'react';
import { getDoc, getDocs ,addDoc, collection, getFirestore } from 'firebase/firestore';
import swal from 'sweetalert';
import Order from './Order';

const AdminPage = () => {

  const [orders, setOrders] = useState([])

  const [categoryId, setCategoryId] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()
  const [title, setTitle] = useState('')


  const product = {
    categoryId: categoryId,
    description: description,
    image: image,
    price: price,
    stock: stock,
    title: title
  }

  const handleClick = () => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    addDoc(productsCollection, product)
    .then(
      swal({
        title: "Producto agregado",
        icon: "success"
      })
    )
  }

  useEffect(() => {
    const querydb = getFirestore();
    const ordersCollection = collection(querydb, 'orders')
    getDocs(ordersCollection)
    .then(res => setOrders(res.docs.map(order => ({id: order.id, ...order.data()}))));
  }, [orders])





  return (
    <div className='pt-[90px]'>
        <p className='text-4xl sm:text-2xl md:text-2xl text-center font-bold'>Control de Administrador</p>


      {/* CARGA DE PRODUCTOS */}


        <div>
          <form className='flex flex-col items-center w-[70vw] m-auto'>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Titulo' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='p-2'>
                <select className='border p-2 rounded-2xl' placeholder='Categoría' value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                  <option>gorras</option>
                  <option>beanies</option>
                </select>
            </div>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Descripción' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input type="text" className='border p-2 rounded-2xl' placeholder='Imagen' value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input type='number' className='border p-2 rounded-2xl' placeholder='Precio' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div><div className='p-2'>
                <input type="number" className='border p-2 rounded-2xl' placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)}/>
            </div>
          </form>
          <div className='flex items-center justify-center p-4'>
            <button type='reset' onClick={handleClick} className='p-2 text-white font-bold bg-[#5a2b80] rounded-xl text-center cursor-pointer w-auto text-2xl'>Agregar</button>
          </div> 
        </div>


        {/* CONTROL DE ORDENES */}

        <div>
          <p className='text-4xl font-bold text-center p-4'>Ordenes</p>
          <div>
            {
              orders.map(order => <Order key={order.id} order={order} id={order.id} setorder={setOrders}/>)
            }
          </div>
        </div>


    </div>
  )
}

export default AdminPage