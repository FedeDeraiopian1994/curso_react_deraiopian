import './App.css'
import Header from './Header';
import ItemsListContainer from './ItemsListContainer';
import {  BrowserRouter, Routes, Route } from "react-router-dom" 
import ItemDetailContainer from './ItemDetailContainer';
import Footer from './Footer';
import React from 'react';
import Cart from './Cart';
import CartContextProvider from './CartContext';
import Checkout from './Checkout';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element = {<ItemsListContainer/>}/>
          <Route path={"/category/:id"} element = {<ItemsListContainer/>}/>
          <Route path={"/item/:id"} element = {<ItemDetailContainer/>}/>
          <Route path={"/cart"} element = {<Cart />}/>
          <Route path={"/checkout"} element = {<Checkout />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
