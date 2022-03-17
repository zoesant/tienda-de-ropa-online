import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import './ItemCount.css'



function ItemCount ({stock, initial,onAdd,item}) {

    const [cantidad, setCantidad] = useState(initial);   
    const cartContext = useContext(CartContext);
<<<<<<< HEAD
    
=======
 

>>>>>>> f77593228cffdd4ff5c9e447bbd877c63329edae
    const addProduct = () => {
        if(cantidad !== 0){
            const seAgregoItem = cartContext.addItem(item,cantidad);
            if(seAgregoItem){
                onAdd();
            }
        }
    }

    const sumar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }
    const restar = () => {
        if(cantidad !== 0){
            setCantidad(cantidad - 1);
        }
    }
  
// cantidad = 3
    return (
    <div className="cont-item-count">

        <div className="item-count" >
            <button className="btn-cant" onClick={restar}> - </button>
            <span>{cantidad}</span>
            <button className="btn-cant" onClick={sumar}> + </button>
        </div>
        <button className="btn-add" onClick={addProduct}> Agregar al carrito </button>

    </div>

    
    );

    
    }

    


export default ItemCount;







