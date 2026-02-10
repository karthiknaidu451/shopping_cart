import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./components/nav";
import AppRoutes from "./components/rout";

function App() {
  const [cartItem, setcartItem] = useState([]);

  const addToCart = (product) => {
    setcartItem((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <Nav cartItem={cartItem} />
      <AppRoutes
        addToCart={addToCart}
        cartItem={cartItem}
        setcartItem={setcartItem}
      />
    </BrowserRouter>
  );
}

export default App;
