import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const { productosTotales } = useContext(CartContext);
  
    return (
      productosTotales() > 0 ? (
        <div className="cart-widget">
          <Link to="/cart">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="badge">{productosTotales()}</span>
          </Link>
        </div>
      ) : null
    );
};

export default CartWidget;


  