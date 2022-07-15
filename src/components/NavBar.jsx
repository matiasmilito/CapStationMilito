import React from 'react';
import { useState } from 'react';
import Logo from '../assets/cap.png';
import {FaShoppingCart, FaUser, FaBars, FaTimes} from 'react-icons/fa';


const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-yellow-400 text-black'>
      <div className='flex items-center'>
        <img src={Logo} alt="logo" style={{width: '55px'}}/>
        <h1 className='text-2xl font-bold pl-4 text-black'>CapStation</h1>
      </div>

      {/*Desktop Menu*/}
      <ul className='hidden md:flex items-center'>
        <li className='hover:text-[#253161] font-bold'>Home</li>
        <li className='hover:text-[#253161]'>Gorras</li>
        <li className='hover:text-[#253161]'>Beanies</li>
      </ul>

      <ul className='hidden md:flex items-center'>
        <li className='text-3xl hover:text-[#253161]'><FaShoppingCart /></li>
        <li className='text-3xl hover:text-[#253161]'><FaUser /></li>
      </ul>
      


      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-10 text-2xl'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-yellow-400 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-[#253161]'>Home</li>
        <li className='py-6 text-4xl hover:text-[#253161]'>Gorras</li>
        <li className='py-6 text-4xl hover:text-[#253161]'><FaShoppingCart /></li>
        <li className='py-6 text-4xl hover:text-[#253161]'><FaUser /></li>
      </ul>

      

    </div>
  )
}

export default NavBar