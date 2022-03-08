import { useState } from "react";
import './ItemCount.css'



function ItemCount ({stock, initial,onAdd}) {

    const [cantidad, setCantidad] = useState(initial);
    


    const addProduct = (e) => {
        if(cantidad !== 0){
            onAdd();
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

        <button className="btn-add" onClick={addProduct}> Agregar </button>

    </div>

    
    );

    
    }

    


export default ItemCount;







