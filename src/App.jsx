import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import MyNavbar from "./Components/Navbar";
import ProductDetail from "./Pages/ProductDetail";

const App = () => {

  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:title" element={<ProductDetail/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
