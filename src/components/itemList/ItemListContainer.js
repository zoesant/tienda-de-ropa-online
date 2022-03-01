import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../NavBar.css';
import './ItemList.css'
import ItemList from './ItemList';

const items = [
    {   id: 1, 
        title:'Remera-Adidas',
        description:'UNA REMERA DE LAS 3 TIRAS EN ALGODÓN INSPIRADA EN LA VERSIÓN ORIGINAL DE LOS 70', 
        price: '$200', 
        pictureUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/16fefe6dbb3e4b39a008a83500d507a5_9366/Remera_3_Tiras_Blanco_CW1203_21_model.jpg'
    },
        {id: 2, 
        title:'Remera-Nike', 
        description:'Remera Nike Nsw Hybrid Ss', 
        price: '$300', 
        pictureUrl:'https://ferreira.vteximg.com.br/arquivos/ids/377225-588-588/ni_AJ9996010.jpg?v=637560091045270000' }
]

function ItemListContainer(props) {
    return (
    <div>
        <h1> {props.title} </h1>
        <div>
            <ItemList
                items={items}/>
        </div>
    </div>
    
    );
}

export default ItemListContainer;


// export const hello = (props) =>  <h2>{props.title}</h2> ;
// export default () => <hello title="HELLO"/>;

// function ItemListContainer() {
//     return(
//         export const hello = (props) =
//         > 
        
        
//     )
// }





// export default ItemListContainer;