import React, { useEffect, useState } from 'react'
import { doc, updateDoc, setDoc, getFirestore } from 'firebase/firestore';


export const Order = ({order, setorders}) => {

    const [refresh, setRefresh] = useState(false)
    const [bool, setBool] = useState(false)
    
        
    const handleClick = () =>{
        const db = getFirestore();
        const documento = doc(db, 'orders', order.id)
        setBool(!bool)
        updateDoc(documento, {
            state: bool
        })
        // .then(res => {
        //     alert("sfsdf")
        //     setorders((prevState) => {
        //         // recorrer la lista
        //         // si es el elemento lo cambias
        //         // 
        //     })
        // })
        
    }
    

    // useEffect(() => {
        
    // }, [refresh])

  return (
    <div className='flex border-b-2 items-center'>
        <div className='flex flex-col p-4 w-[30vw] border-r-2'>
            <p>Comprador: {order.buyer.name}</p>
            <p>{order.buyer.email}</p>
            <p>Dirección: {order.buyer.address}</p>
            <p>Celular: {order.buyer.phone}</p>
        </div>
        <div>
            {
                order.items.map((product) =>{  
                    return (
                        <div className='flex justify-around w-[50vw] text-center border-b-2 p-2'>
                                <p className='text-center'>{product.title}</p>
                                <p className='text-center'>{product.quantity}</p>
                                <p className='text-center'>${product.price}</p>
                        </div> 
                )})
            }
        </div>
        <div className='w-[10vw] text-center font-bold p-4 border-l-2'>
            ${order.total}
        </div>
        <div className='m-auto'>
            <button onClick={handleClick}>
                {order.state? <div className='bg-green-500 p-2 rounded-lg '>A retirar</div>  : <div className='bg-red-400 p-2 rounded-lg'>En proceso</div>}
            </button>
        </div>
    </div>
  )
}

export default Order