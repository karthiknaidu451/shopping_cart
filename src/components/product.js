import React from "react";
import ProductsDetails from "./productdetails";

function Product({ addToCart }) {


  return (
    <div className="container">
      <div className="product">
        {ProductsDetails.map((element) => (
          <div className="product-card" key={element.id}>
            <img src={element.image} alt={element.name} />
            <h3>{element.name}</h3>
            <p>{element.description}</p>
            <p className="price">₹{element.price}</p>

            <button onClick={() => addToCart(element)}>
              Add to Cart
            </button>


          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
