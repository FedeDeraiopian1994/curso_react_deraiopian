import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart, removeItem, productosTotales, sumaTotal} = useContext(CartContext)
    
  if (productosTotales() == 0){
    return(
      <div className="container">
        <div className="row">
          <div className="col">
          <ion-icon name='close-circle-outline' id="vacio"></ion-icon>
          <div className="alert alert-danger" role="alert">Tu carrito esta vacio!</div>
          <Link to = {"/"} className="btn btn-danger my-5">Regresar a pagina principal</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 id="titulo-productos">Productos agregados</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <table className="table">
              <tbody>
              {cart.map(product => (
                <tr key={String(product.id)}>
                  <td><img src={product.image} alt={product.title} width={80}/></td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price * product.quantity}</td>
                  <td><ion-icon name="trash" onClick={() => {removeItem(product.id)}} /></td>
                </tr>
              ))}
                <tr>
                  <td colSpan={4}>Suma total:</td>
                  <td>${sumaTotal()}</td>
                  <td><Link to={"/checkout"} className="btn btn-success">Checkout</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;



  