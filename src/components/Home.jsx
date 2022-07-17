import React from 'react';
import Portada from '../assets/portadaCapStation.jpeg';
import G1 from '../assets/gorra11.jpeg';
import G2 from '../assets/gorra22.jpeg';
import G3 from '../assets/gorra33.jpeg';
import G4 from '../assets/gorra44.jpeg';
import G5 from '../assets/gorra55.jpeg';
import G6 from '../assets/gorra66.jpg';

{/* product images 640px * 640px */}

const Home = () => {

    const ingresos = [
        {
            image: G1,
            title: "Adidas",
            price: 2500,
            description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar"
        },
        {
            image: G2,
            title: "TNF",
            price: 2500,
            description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar"
        },
        {
            image: G3,
            title: "NYC",
            price: 2500,
            description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar"
        },
        {
            image: G4,
            title: "Smile",
            price: 2500,
            description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar"
        },
        {
            image: G5,
            title: "Rockaway",
            price: 2500,
            description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar"
        },
        {
            image: G6,
            title: "Rockaway",
            price: 2500,
            description: "Gorra de jean color azul, con hebilla ajustable super comoda de usar"
        }
    ]

  return (
    <div className='h-full w-full pt-[80px]'>
        <div>
            <img src={Portada} alt="" srcset="" className='object-cover'/>
        </div>
        <div className='h-36 bg-white flex'>
            <div className='bg-yellow-400 h-20 w-36 m-auto flex items-center justify-center'>
                <h1 className='text-2xl font-bold text-center '>NEW IN</h1>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 top-0 pl-8 pr-8 pb-8 ml-8 mr-8'>
            {ingresos.map((P) => {
                return (
                    <div className='hover:shadow-xl max-w-[300px] m-auto text-center mb-12 border rounded-xl'>
                        <img src={P.image} alt={P.title} className='border rounded-t-xl'/>
                        <h1 className='font-bold text-2xl p-1'>{P.title}</h1>
                        <p className='text-gray-700 text-2xl'>${P.price}</p>
                        <p className='p-2'>{P.description}</p>
                        <p><button className='p-[12px] text-black font-bold bg-yellow-400 border rounded-b-xl text-center cursor-pointer w-full text-2xl hover:opacity-70'>Agregar al Carrito</button></p>                   
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home