import React from 'react';
import { useState } from 'react';
import Logo from '../assets/cap.png';
import {FaShoppingCart, FaUser, FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  // const [activePage, setActivePage] = useState(null)
  
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-yellow-400 text-black'>
      <div className='flex items-center'>
        <Link to='/'><img src={Logo} alt="logo" style={{width: '55px'}} className='transform hover:scale-125 transition duration-300'/></Link>
        <h1 className='text-2xl font-bold pl-4 text-black'><Link to='/'>CapStation</Link></h1>
      </div>

      {/*Desktop Menu*/}
      <ul className='hidden md:flex items-center pr-24'>
        <li className='hover:text-[#683720] font-bold'><Link to='/'>Home</Link></li>
        <li className='hover:text-[#683720]'><Link to='/type/gorras'>Gorras</Link></li>
        <li className='hover:text-[#683720]'><Link to='type/beanies'>Beanies</Link></li>
      </ul>

      <ul className='hidden md:flex items-center'>
        <li className='text-3xl hover:text-[#683720] hover:scale-110 transition duration-100'><CartWidget/></li>
        <li className='text-3xl hover:text-[#683720] hover:scale-110 transition duration-100'><Link to='/login'><FaUser /></Link></li>
      </ul>
      


      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-10 text-2xl'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-yellow-400 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-[#683720]'><Link to='/'>Home</Link></li>
        <li className='py-6 text-4xl hover:text-[#683720]'><Link to='/gorras'>Gorras</Link></li>
        <li className='py-6 text-4xl hover:text-[#683720]'>Beanies</li>
        <li className='py-6 text-4xl hover:text-[#683720]'><CartWidget /></li>
        <li className='py-6 text-4xl hover:text-[#683720]'><Link to='/login'><FaUser /></Link></li>
      </ul>

      

    </div>
  )
}

export default NavBar