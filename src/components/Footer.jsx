import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import {GoLocation, GoMail} from 'react-icons/go'

const Footer = () => {
  return (
    <footer className='static bottom-0 left-0 h-[65px] w-full bg-yellow-400 flex justify-center items-center sm:text:2xl'>
      <div className='flex justify-center items-center'>
        <div className='p-4 text-3xl'><BsInstagram /></div>
        <div className='p-4 text-3xl'><GoLocation /></div>
        <div className='p-4 text-4xl'><GoMail /></div>
      </div>
      <p className='p-4'>Matias Milito WEB ®</p>
    </footer>
  )
}

export default Footer