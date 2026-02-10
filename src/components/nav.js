import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./style.css";
import "./cart.css";

function Nav({ cartItem }) {
    return (
        <>
            <div className="header">
                <div className="logo"><h2>Shopping</h2></div>
                <div className="nav">
                    <ul>
                        <li><Link to={"/"} className="Link">Home</Link></li>
                        <li><Link to={"/product"} className="Link">Products</Link></li>
                        <li><Link to={"/about"} className="Link">About</Link></li>
                        <li>
                            <Link to={"/cart"} className="Link cart_icon_link">
                                <AddShoppingCartIcon style={{ color: "black" }} />
                                {cartItem && cartItem.length > 0 && <span className="cart_count">{cartItem.length}</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Nav;