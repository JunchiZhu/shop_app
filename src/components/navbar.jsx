import React from "react";
import {Link} from "react-router-dom"
import {} from "bootstrap"
import "./nav.css";
export const Navbar = () =>{
    return (
        <div className={"navbar"}>
            <div className={"links"}>
                <Link to={"/"}><span>$</span> Shop</Link>
                <Link to={"/cart"}>
                    <i className={"bi bi-cart"} ></i>Cart
                </Link>
            </div>

        </div>
    )
}