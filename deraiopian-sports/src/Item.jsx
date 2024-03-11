import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center" id="componente">
            <div className="card border-2" id="carta">
                <Link to= {"/item/" + item.id}>
                    <img src= {item.image} className="card-img-top rounded-start" alt= {item.title} />
                    <div className="card-body linkeado">
                        <h6 className="card-text">{item.title}</h6>
                        <p className="card-text">${item.price}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
} 
export default Item;



