import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


function CartWidget() {
    return(
        <div>
            <Link to='/cart'><img className="cart" src={require('../../Assets/carro.png')} /></Link>
        </div>
    )
}





export default CartWidget;
