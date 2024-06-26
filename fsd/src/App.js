import { useState } from 'react';
import { Products } from './components/Products';
import { Favourite } from './components/Favourite';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Cart}  from './components/Cart';
import './App.css';


function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/favourite" element={<Favourite/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>
    </div>
  );
}

export default App;
