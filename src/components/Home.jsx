import React from 'react';
import Portada from '../assets/portadaCapStation.jpeg';
import ItemListContainer from './ItemListContainer';
import Portada2 from '../assets/portadaCapS.jpeg';

{/* product images 640px * 640px */}

const Home = () => {

  return (
    <div className='h-full w-full'>
        <div>
            <img src={Portada} alt="" srcset="" className='object-cover'/>
        </div>
        <div className='h-36 bg-white flex'>
            <div className='bg-yellow-400 h-20 w-36 m-auto flex items-center justify-center hover:scale-110 transition-[250]'>
                <h1 className='text-2xl font-bold text-center'>NEW IN</h1>
            </div>
        </div>
          <ItemListContainer />
    </div>
  )
}

export default Home