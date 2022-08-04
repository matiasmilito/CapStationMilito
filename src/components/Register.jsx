import React from 'react'

const Register = () => {
  return (
    <div className='w-full h-screen bg-yellow-400 flex items-center justify-center'>
        <form className='w-auto h-auto bg-yellow-400 rounded-2xl flex flex-col items-center p-4 '>
            <h2 className='text-black text-2xl font-bold p-2'>Registrese</h2>
            <div className='p-4'>
                <input type="text" placeholder='Nombre' className='p-2 text-center rounded-2xl border border-black  bg-yellow-400'/>
            </div>
            <div className='p-4'>
                <input type="text" placeholder='Apellido' className='p-2 text-center rounded-2xl border border-black  bg-yellow-400'/>
            </div>
            <div className='p-4'>
                <input type="text" placeholder='Email' className='p-2 text-center rounded-2xl border border-black  bg-yellow-400'/>
            </div>
            <div className='p-4'>
                <input type="text" placeholder='Usuario' className='p-2 text-center rounded-2xl border border-black  bg-yellow-400'/>
            </div>
            <div className='p-4'>
                <input type="password" placeholder='Contraseña' className='p-2 text-center rounded-2xl border border-black bg-yellow-400'/>
            </div>
            <div className='p-4'>
                <div className='pl-1'><button className='bg-black text-white rounded-2xl font-bold p-2 hover:bg-white hover:text-black'>Registrarme</button></div>
            </div>
        </form>
    </div>
  )
}

export default Register