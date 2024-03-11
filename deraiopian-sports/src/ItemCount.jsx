import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({onAdd}) => {
  

  const [contador, setContador] = useState(1);
  const [itemAdded, setItemAdded] = useState (false); 

  const incremento = () => {
    setContador  (contador + 1);
  }
  const decremento = () => {
    if (contador > 1){
      setContador  (contador - 1);
    }
  } 

  const handleAddProduct = () => {
    setContador(1);
    onAdd(contador); 
    setItemAdded(true); 
}

  return (
    <>
      <div className="row my-1 grupo">
        <div className="col-md-4">
          <div className="btn-group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-danger" onClick={decremento}>-</button>
            <button type="button" className="btn btn-warning">{contador}</button>
            <button type="button" className="btn btn-success" onClick={incremento}>+</button>
          </div>
        </div>
      </div>
      <div className="row my-1 grupo">
        <div className="col-md-10 botonazo">
          {itemAdded ? 
            <Link to={"/Cart"} className="btn btn-warning"> Finalizar compra</Link>:
          <button type="button" className="btn btn-warning" onClick={handleAddProduct}> Agregar producto</button> 
           }
        </div>
      </div>
      
    </>
    );
  };
  
  export default ItemCount;


