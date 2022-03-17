import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { CartContext } from '../../context/CartContext';
=======
>>>>>>> f77593228cffdd4ff5c9e447bbd877c63329edae


function CartWidget() {

    const context = useContext(CartContext);

    function getQuantityItems(){
        let quantityItemsCart = 0;
        context.datosCarrito.map(element => {
            quantityItemsCart += element.quantity;
        });
        return quantityItemsCart;
    }

    return(
<<<<<<< HEAD
        getQuantityItems() > 0?
            <div>
                <Link to='/cart'>
                    <img className="cart" src={require('../../Assets/carro.png')} id='cart'/>
                    <p>{getQuantityItems()}</p>
                </Link>
            </div>
        :
            <>
            {console.log('ITEMS',context.datosCarrito)}
            </>
        
=======
        <div>
            <Link to='/cart'><img className="cart" src={require('../../Assets/carro.png')} /></Link>
        </div>
>>>>>>> f77593228cffdd4ff5c9e447bbd877c63329edae
    )
}





export default CartWidget;
