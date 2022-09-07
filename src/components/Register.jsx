import { async } from '@firebase/util';
import React from 'react';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser} = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <div className='w-full h-screen bg-white flex items-center justify-center'>
        <form className='w-auto h-auto bg-white rounded-2xl flex flex-col items-center p-4' >
            <h2 className='text-black text-2xl font-bold p-2'>Registrese</h2>
            
            <div className='p-4'>
                <input type="email" placeholder='Email' className='p-2 text-center rounded-2xl border border-black' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='p-4'>
                <input type="password" placeholder='Contraseña' className='p-2 text-center rounded-2xl border border-black' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='p-4'>
                <div className='pl-1'><button className='p-2 text-black font-bold bg-yellow-400 rounded-xl text-center cursor-pointer w-auto text-2xl hover:bg-yellow-300' onClick={handleSubmit}>Registrarme</button></div>
            </div>
        </form>
    </div>
  )
}

export default Register