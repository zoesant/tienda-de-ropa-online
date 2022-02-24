import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';
import ItemList from './ItemList';

const items = [
    {id: 1, title:'flores',description:'descripcion', price: '200', pictureUrl: 'https://essential.vteximg.com.br/arquivos/ids/305737-1000-1000/266-0710_1.jpg?v=637112560190470000'},
    {id: 2, title:'gatos', description:'descripcion', price: '300', pictureUrl:'https://www.monarqui.com.ar/wp-content/uploads/remera-friends.jpg' }
]

const promesa = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(items)
    },2000)
})

promesa.then(resultado=>{
    console.log(resultado)
    return resultado
}, error=>{
    console.log('Error', error)
})

function Header(props) {
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

export default Header;


// export const hello = (props) =>  <h2>{props.title}</h2> ;
// export default () => <hello title="HELLO"/>;

// function ItemListContainer() {
//     return(
//         export const hello = (props) =
//         > 
        
        
//     )
// }





// export default ItemListContainer;