import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import User from '../assets/user.png'
import { useNavigate } from 'react-router-dom';
import { getDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import MyOrders from './MyOrders';


const Profile = () => {

    const [myOrders, setMyOrders] = useState([])

    const { user, logout } = UserAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (e) {
            
        }
    }



    useEffect(() => {
      const querydb = getFirestore();
      const ordersCollection = collection(querydb, 'orders')
      const filterMyOrders = query(ordersCollection, where('buyer.email' , '==', user.email))
      getDocs(filterMyOrders)
      .then(res => setMyOrders(res.docs.map(order => ({id: order.id, ...order.data()}))))
    }, [myOrders])
 

    return (
        <div className='w-full min-h-screen pt-[80px] flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
            <div>
                <img src={User} alt='bienvenido' className='max-w-[150px] p-2' />
            </div>
                <p>{user && user.email}</p>
                
                <div className='p-4'>
                    <button className='p-2 text-black font-bold bg-[#f1da36] rounded-xl text-center cursor-pointer w-auto text-2xl' onClick={handleLogout}>Cerrar Sesión</button>
                </div>
                <p className='text-center font-bold text-2xl'>Compras en proceso</p>
                {
                  myOrders.map((orders) => <MyOrders orders={orders}/>)
                }
            </div>
        </div>
    )
}

export default Profile