import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/home";
import Product from "./pages/Product/product"
import './App.scss';
import Layout from './components/layout';

function App() {
  return (
     <Router>
     <Layout />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/product" element={<Product />} />
     </Routes>
   </Router>
  );
}

export default App;
