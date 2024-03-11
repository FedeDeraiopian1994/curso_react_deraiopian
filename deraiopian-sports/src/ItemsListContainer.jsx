import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemsList from './ItemsList';
import array from "./prducto.json";
import {  useParams } from "react-router-dom";
import {collection, addDoc, getFirestore, where, query, getDocs} from "firebase/firestore";



const ItemsListContainer = () => {
    const [item,setItem] = useState([]);
    const {id} = useParams();

        useEffect (() => {
            const promesa = new Promise (resolve => {
                setTimeout (() =>{
                    resolve (id ? array.filter(item => item.category === id) : array);
                }, 2000);
            })
            promesa.then(data => {
                setItem(data);
            })
        }, [id])

        /*/useEffect (() => {
          const db = getFirestore ();
          const itemsCollection = collection (db, "items"); 

          array.forEach(producto => {addDoc (itemsCollection, producto)}
          )}, []); /*/

         useEffect (() => {
            const db = getFirestore ();
            const itemsCollection = collection (db, "items"); 
            const queryBd = id ? query (itemsCollection, where ("category", "==", id)) : itemsCollection;
            getDocs(queryBd).then (resultado => {
              setItem(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            });
            
            }, [id]); 
      

        return (
          <div className="product-list">
            <ItemsList items ={item} />
            
          </div>
        );
      };
  
export default ItemsListContainer;