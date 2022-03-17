import React, { Children, useState } from 'react'
import { CartContext } from '../CartContext';

export default function CustomCartContext({defaultValue = [], children}) {

    const[datosCarrito,setDatosCarrito] = useState(defaultValue);

<<<<<<< HEAD
    function addItem(item, quantity){
=======
    function addItem(item, quantity,e){
>>>>>>> f77593228cffdd4ff5c9e447bbd877c63329edae
        if(!isInCart(item.id)){
            setDatosCarrito(datosCarrito.concat({item: item, quantity: quantity }));
            return true;
        }else{
            alert('El item seleccionado ya se encuentra en el carro');
            return false;
        }
    }

    function removeItem(itemId){ 
        setDatosCarrito(datosCarrito.filter((itemCarrito) => itemCarrito.item.id !== itemId));
        console.log(datosCarrito);
    }

    function clear(){
        setDatosCarrito([]);
    }

    function isInCart(id){ 
        let isInCart = false;
        datosCarrito.map((itemCarrito)=>{
            if(itemCarrito.item.id === id){
                isInCart = true;
            }
        });
        return isInCart;
    }

    return (
        <CartContext.Provider value={{datosCarrito, addItem, removeItem, clear, isInCart}}>{children}</CartContext.Provider>
    )
}
