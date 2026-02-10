import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./product";
import Cart from "./cart";
import Home from "./home";
import About from "./about";

function AppRoutes({ addToCart, cartItem, setcartItem }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product addToCart={addToCart} />} />
      <Route
        path="/cart"
        element={<Cart cartItem={cartItem} setcartItem={setcartItem} />}
      />
    </Routes>
  );
}

export default AppRoutes;
