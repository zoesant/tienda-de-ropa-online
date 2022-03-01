import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import './ItemDetail.css'

const itemRetornable = {  id: 1, 
                    title:'Remera-Adidas',
                    description:'UNA REMERA DE LAS 3 TIRAS EN ALGODÓN INSPIRADA EN LA VERSIÓN ORIGINAL DE LOS 70', 
                    price: '$200', 
                    pictureUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/16fefe6dbb3e4b39a008a83500d507a5_9366/Remera_3_Tiras_Blanco_CW1203_21_model.jpg'
                };


export default function ItemDetailContainer(props) {

    const [item, setItem] = useState('');

    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(itemRetornable)
        },2000)
    })

    useEffect(async () => {
        const getItem = () => {
            return promesa;
        }
         setItem(await getItem());
      },[]);

    return (
        
        <div>
            <h1> {props.title} </h1>
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}
