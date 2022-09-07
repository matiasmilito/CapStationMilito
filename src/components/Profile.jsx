import React from 'react'
import { UserAuth } from '../context/AuthContext'
import User from '../assets/user.png'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const { user, logout } = UserAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.log('logout')
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className='h-screen w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <img src={User} alt="user" className='w-[40vw] p-4 max-w-[200px]' />
                <p>Email: {user && user.email}</p>
                <div className='p-4'>
                    <button className='p-2 text-black font-bold bg-yellow-400 rounded-xl text-center cursor-pointer w-auto text-2xl hover:bg-yellow-300' onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            </div>
        </div>
    )
}

export default Profile