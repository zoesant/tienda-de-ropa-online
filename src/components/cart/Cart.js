import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCart from './ItemCart';

export default function Cart() {

  const context = useContext(CartContext);

  function limpiarCarrito(){
    context.clear();
  }

  return (
    <>
      <h1>Carrito</h1>
      <div><button onClick={limpiarCarrito}>Vaciar carrito</button></div>
      {
        context.datosCarrito.length !== 0 ?
          <ul className='lista'>
                {
                  context.datosCarrito.map((itemCarrito) => (
                        <ItemCart key={itemCarrito.item.id} cartItem={itemCarrito}></ItemCart>
                      )
                  )
                }
          </ul>  
        :
          <div>El carrito esta vacio</div>    
      }  
    </>
  )
}
