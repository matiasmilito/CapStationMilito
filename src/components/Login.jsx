import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const Login = () => {
    const navigate = useNavigate();

    const {signin} = UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signin(email, password)
            navigate('/profile')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }


  return (
    <div className='w-full h-screen bg-white flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='w-auto h-auto bg-white rounded-2xl flex flex-col items-center p-4 '>
            <h2 className='text-black text-2xl font-bold p-2'>Inicie Sesión</h2>
            <div className='p-4'>
                <input 
                type="text" 
                placeholder='Usuario' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>
            <div className='p-4'>
                <input 
                type="password" 
                placeholder='Contraseña' 
                className='p-2 text-center rounded-2xl border border-black'
                onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <div className='flex flex-col items-center p-2'>
                <div className=''><button className='p-2 text-black font-bold bg-yellow-400 rounded-xl text-center cursor-pointer w-auto text-2xl hover:bg-yellow-300'>Ingresar</button></div>
                <Link to='/register'><p className='p-2'>Aún no tenes cuenta? Regístrate</p></Link>
                {/* <div className='pl-1'><button className='bg-black text-white rounded-2xl font-bold p-2 hover:bg-white hover:text-black'><Link to='/register'>Registrarme</Link></button></div> */}
            </div>
        </form>
    </div>
  )
}

export default Login