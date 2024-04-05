import React, {useContext} from "react";
import {cart_data} from "../../components/shop_data";
import {Cart_item} from "../../components/cart_item";
import {useNavigate} from "react-router-dom"
import "./cart.css";
export const Cart=()=>{
    const navigate = useNavigate();
    const {cart, products, checkout} = useContext(cart_data);
    const total_amount = checkout();

    const handleCheckoutClick = () => {
        alert('Wait for more coming...');
    };

    return <div className={"cart_page"}>
        <div>
            <h1>Your Cart</h1>
        </div>
        <div className={"cart_items"}>{
                products.map((product) =>{
                        if(cart[product.id] !== 0){
                            return <Cart_item data={product}/>
                        }
                    }
                )
            }

        </div>
        {total_amount > 0 ? (<div className={"checkout_container"}>
                <h1>Checkout: ${total_amount}</h1>
                <button onClick={()=>navigate('/')}>Continue Shopping</button>
                <button onClick={handleCheckoutClick}>Checkout</button>
            </div>):
            (<h1>Your Cart Is Empty</h1>)}
    </div>
}