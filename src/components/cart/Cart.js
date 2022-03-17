import React, { useContext } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> f77593228cffdd4ff5c9e447bbd877c63329edae
import { CartContext } from '../../context/CartContext';
import ItemCart from './ItemCart';

export default function Cart() {

  const context = useContext(CartContext);

  function limpiarCarrito(){
    context.clear();
  }

<<<<<<< HEAD
  function getTotalCarrito(){
    let precioFinal = 0;
    context.datosCarrito.map(element => {
        console.log( element.item.price);
        precioFinal += element.quantity * element.item.price;
    });
    return precioFinal;
  }

  return (
    <>
      <h1>Carrito</h1>
      {
              
        context.datosCarrito.length !== 0 ?
        <>
          <div><button onClick={limpiarCarrito}>Vaciar carrito</button></div>
=======
  return (
    <>
      <h1>Carrito</h1>
      <div><button onClick={limpiarCarrito}>Vaciar carrito</button></div>
      {
        context.datosCarrito.length !== 0 ?
>>>>>>> f77593228cffdd4ff5c9e447bbd877c63329edae
          <ul className='lista'>
                {
                  context.datosCarrito.map((itemCarrito) => (
                        <ItemCart key={itemCarrito.item.id} cartItem={itemCarrito}></ItemCart>
                      )
                  )
                }
          </ul>  
<<<<<<< HEAD

          <h5>Total: {getTotalCarrito()}</h5>
        </>
        :
          <>
            <div>El carrito esta vacio</div>   
            <Link to='/'><button>Volver al inicio</button></Link> 
          </>  
=======
        :
          <div>El carrito esta vacio</div>    
>>>>>>> f77593228cffdd4ff5c9e447bbd877c63329edae
      }  
    </>
  )
}
