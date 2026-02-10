import React, { useState } from "react";
import "./style.css";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

function Cart({ cartItem, setcartItem }) {
    const navigate = useNavigate();
    const [value, setValue] = useState(3);

    // Calculations
    const subtotal = cartItem.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);
    const shipping = subtotal > 50000 || subtotal === 0 ? 0 : 500;
    const tax = subtotal * 0.05;
    const totalAmount = subtotal + shipping + tax;

    // Function to increase quantity
    const handleIncrement = (index) => {
        const updatedCart = [...cartItem];
        updatedCart[index].qty = (updatedCart[index].qty || 1) + 1;
        setcartItem(updatedCart);
    };

    // Function to decrease quantity
    const handleDecrement = (index) => {
        const updatedCart = [...cartItem];
        if ((updatedCart[index].qty || 1) > 1) {
            updatedCart[index].qty = (updatedCart[index].qty || 1) - 1;
            setcartItem(updatedCart);
        }
    };

    // Function to remove item from cart
    const handleRemove = (index) => {
        const updatedCart = cartItem.filter((_, i) => i !== index);
        setcartItem(updatedCart);
    };

    // Function to clear all items
    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to clear your cart?")) {
            setcartItem([]);
        }
    };

    return (
        <div className="cart-container">
            {cartItem.length === 0 ? (
                <div className="empty_cart_container">
                    <div className="empty_cart_icon_wrapper">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/11329/11329073.png"
                            alt="Empty Cart"
                            className="exact_empty_cart_img"
                        />
                    </div>
                    <h2 className="empty_cart_exact">
                        Your Cart is <span className="highlight_red">Empty!</span>
                    </h2>
                    <p className="empty_cart_subtext">
                        Must add items on the cart before you proceed to check out.
                    </p>
                    <button className="return_shop_btn" onClick={() => navigate("/product")}>
                        <span className="btn_icon">🛍️</span> RETURN TO SHOP
                    </button>
                </div>
            ) : (
                <>
                    <div className="exact_cart_layout">
                        <h1 className="image_layout_heading">MY CART</h1>
                        <div className="heading_divider"></div>

                        <div className="cart_main_content">
                            <div className="cart_items_list">
                                {cartItem.map((item, index) => (
                                    <div className="cart_box_exact" key={index}>
                                        <button className="remove_x_btn" onClick={() => handleRemove(index)}>&times;</button>

                                        <div className="cart_item_exact">
                                            <div className="cart_left_exact">
                                                <img src={item.image} alt={item.name} />
                                            </div>

                                            <div className="cart_middle_exact">
                                                <h3 className="exact_item_name">{item.name} <span className="price_inline_label">Price: true</span></h3>
                                                <p className="exact_item_id">Item {item.id || "73720BK"}</p>
                                                <p className="exact_stock_status">In Stock and ready to ship!</p>

                                                <div className="item_bottom_links">
                                                    <button className="link_style_btn">Add a Gift Bag ($9.99 ea)</button>
                                                </div>
                                            </div>

                                            <div className="cart_right_exact">
                                                <div className="price_row_exact top_row">
                                                    <span className="price_value">₹{item.price.toLocaleString()}</span>
                                                </div>

                                                <div className="control_row_exact">
                                                    <span className="control_label_exact">Quantity:</span>
                                                    <div className="quantity_counter_exact">
                                                        <button onClick={() => handleDecrement(index)}>-</button>
                                                        <span>{item.qty || 1}</span>
                                                        <button onClick={() => handleIncrement(index)}>+</button>
                                                    </div>
                                                </div>

                                                <div className="control_row_exact subtotal_exact_row">
                                                    <span className="control_label_exact">Subtotal:</span>
                                                    <span className="price_value">₹{(item.price * (item.qty || 1)).toLocaleString()}</span>
                                                </div>

                                                <div className="item_bottom_links right_links">
                                                    <button className="link_style_btn">Add a Personalized Card ($5.00)</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cart Summary */}
                            <div className="cart_summary">
                                <h3>Order Summary</h3>
                                <div className="summary_details">
                                    <p>Subtotal: <span>₹{subtotal.toLocaleString()}</span></p>
                                    <p>Estimated Shipping: <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span></p>
                                    <p>Tax (5%): <span>₹{tax.toLocaleString()}</span></p>
                                    <div className="total_separator"></div>
                                    <p className="total_price_row">Total Amount: <span>₹{totalAmount.toLocaleString()}</span></p>
                                </div>
                                <button className="checkout_btn">Proceed to Checkout</button>
                                <p className="secure_text">🔒 Secure Checkout Guaranteed</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
