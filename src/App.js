// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SalesPage from "./components/SalesPage/SalesPage";
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartPage from './components/ProductDetails/CartPage';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/cartpage" element={<CartPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
