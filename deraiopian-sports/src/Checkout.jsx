import { useContext } from "react";
import { CartContext } from "./CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from 'react';

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [email, setEmail] = useState("");

    const {cart, clear, sumaTotal} = useContext(CartContext);

    const generarOrden = () => {
      if (nombre.length === 0) {
          return false;
      }

      if (documento.length === 0) {
        return false;
      }

      if (telefono.length === 0) {
        return false;
      }

      if (domicilio.length === 0) {
        return false;
      }

      if (email.length === 0) {
          return false;
      }
    
      const buyer = {name:nombre, document:documento, phone:telefono, adress:domicilio, email:email};
        const items = cart.map(item => ({id:item.id, title:item.title, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumaTotal();
        const order = {buyer:buyer, items:items, date:date, total:total};


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
        });
      };

  return (
      <div className="container previo">
        <div className="row">
          <div className="col text-center">
            <h1 id="titulo-productos">Checkout</h1>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Nombre/s y Apellido/s</label>
                        <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Numero de documento</label>
                        <input type="text" class="form-control" id="documento" onInput={(e) => {setDocumento(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                        <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Domicilio de entrega</label>
                        <input type="text" class="form-control" id="domicilio" onInput={(e) => {setDomicilio(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Dirección de correo electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={(e) => {setEmail(e.target.value)}}/>
                    <div id="emailHelp" class="form-text">Su email no será compartido.</div>
                    </div>
                    <button type="submit" class="btn btn-success">Realizar compra</button>
                </form>
            </div>
          <div className="col-md-6 text-center">
            <table className="table">
              <tbody>
              {cart.map(product => (
                <tr key={String(product.id)}>
                  <td><img src={product.image} alt={product.title} width={80}/></td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price * product.quantity}</td>
                </tr>
              ))}
                <tr>
                  <td colSpan={4}>Suma total:</td>
                  <td>${sumaTotal()}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    );
};
  
  export default Checkout;
