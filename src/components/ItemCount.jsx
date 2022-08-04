import React, { useEffect, useState } from 'react';
import Item from './Item';
import swal from 'sweetalert';
import {BsCartDash, BsCartPlus} from 'react-icons/bs';

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    function handleClickMas(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function handleClickMenos(){
        if(count > 1){
            setCount(count -1)
        }
    }

    useEffect(() => {
        
    }, [count])

    const onAdd = () => {
        swal({
            title: "Agregado!",
            text: `Se agregaron ${count} al carrito!`,
            icon: "success",
          });
    }

    return (
        <div>
            <div className='flex items-center justify-center pb-2'>
                <div className='pr-4 text-2xl' onClick={handleClickMenos}><BsCartDash/></div>
                <div className='text-2xl font-bold' >{count}</div>
                <div className='pl-4 text-2xl' onClick={handleClickMas}><BsCartPlus/></div>
            </div>
            <button className='p-[12px] text-black font-bold bg-yellow-400 rounded-b-xl text-center cursor-pointer w-full text-2xl hover:opacity-70' onClick={onAdd}>Agregar al Carrito</button>

        {/* // <div className='flex'>
        //     <button onClick={handleClickMas}>+</button>
        //     <h3>{count}</h3>
        //     <button onClick={handleClickMenos}>-</button>
        //     <button onClick={onAdd}>onAdd</button>
        // </div> */}

        </div>
    )
}

export default ItemCount