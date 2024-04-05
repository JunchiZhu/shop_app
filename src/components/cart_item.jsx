import React, {useContext} from "react";
import {cart_data} from "./shop_data";
import "./cart_item.css";
export const Cart_item=(product)=>{
    const {cart, add_item, delete_item, update_amount} = useContext(cart_data);
    const {id, title, price, images } = product.data;

    return <div className={"cart_item"}>
        <img src={images[0]} alt={""}/>
        <div className={"description"}>
            <h1>{title}</h1>
            <p>${price}</p>
            <div className={"amount_control"}>
                <button onClick={()=>add_item(id)}>+</button>
                <input value={cart[id]} onChange={(event) => update_amount(id, Number(event.target.value))}/>
                <button onClick={()=>delete_item(id)}>-</button>
            </div>


        </div>

    </div>
}
