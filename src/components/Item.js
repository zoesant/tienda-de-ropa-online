import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';

function Item({item}) {
    return (
    <li key={item.id} >
        <img className="img-item" src={item.pictureUrl} />
        <div>{item.title}</div>
        <div>{item.price}</div>
    </li>
    );
}

export default Item;