import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import array from "./prducto.json";
import {  useParams } from "react-router-dom";
import {getDoc, getFirestore, doc} from "firebase/firestore";



const ItemDetailContainer = () => {
    const [item,setItem] = useState([]);
    const {id} = useParams();

        useEffect (() => {
            const promesa = new Promise (resolve => {
                setTimeout (() =>{
                    let producto = array.find(item => item.id === parseInt (id) );
                    resolve (producto);
                }, 2000);
            })
            promesa.then(data => {
                setItem(data);
            })
        }, []);

        useEffect (() => {
          const db = getFirestore ();
          const producto = doc(db, "items", id);
          getDoc(producto).then (resultado => {
            setItem({id:resultado.id, ...resultado.data()});
          });
          
          }, [id]); 

        return (
          <div className="product-list">
            <ItemDetail items ={item} />
          </div>
        );
      };
  
export default ItemDetailContainer;