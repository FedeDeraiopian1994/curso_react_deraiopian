import { CartContext } from "./CartContext";
import { useContext } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({items}) =>{
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(items, quantity);
    }

    return(
        <div className="container detalle">
            <div className="row">
                <div className="col-md-4">
                    <img src={items.image} alt={items.title} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h4 className="card-title">{items.title}</h4>
                    <p className="card-text"><small className="text-body-secondary">{items.description}</small></p>
                    <h6>${items.price}</h6>
                    <ItemCount onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;


