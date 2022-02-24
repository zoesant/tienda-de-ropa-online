import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';

function Item({item}) {
    return (
    <li key={item.id} >
        <div>{item.title}</div>
        <div>{item.price}</div>
        <img className="img-item" src={item.pictureUrl} />
    </li>
    );
}

export default Item;