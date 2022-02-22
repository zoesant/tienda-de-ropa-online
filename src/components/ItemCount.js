import { useState } from "react";



function Contador ({stock, initial}) {

    const [cantidad, setCantidad] = useState(initial);
    


    const addProduct = () => {
        alert('Usted selecciono ' + cantidad + ' remeras');
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
    <div>
    <button onClick={restar}> - </button>
    <div>
    <div>
        <input type='number' value={cantidad}>
        </input>
        <button onClick={addProduct}> add </button>

    </div>
    <button onClick={sumar}> + </button>
    </div>
    </div>

    
    );

    
    }

    


export default Contador;







