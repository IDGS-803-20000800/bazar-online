import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ProductList />} />
        <Route path="/item/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App