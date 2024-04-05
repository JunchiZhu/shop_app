import React, { createContext, useEffect, useState } from "react";

export const cart_data = createContext(null);

export const Shop_data = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let query = 'https://dummyjson.com/products';
            const response = await fetch(query);
            const result = await response.json();
            const fetchedProducts = result.products || [];

            setProducts(fetchedProducts);

            let initialCart = {};
            fetchedProducts.forEach(product => {
                initialCart[product.id] = 0;
            });
            setCart(initialCart);
        };

        fetchData();
    }, []);

    const add_item = (item_id) => {
        setCart(prevCart => ({
            ...prevCart,
            [item_id]: (prevCart[item_id] || 0) + 1
        }));
    };

    const delete_item = (item_id) => {
        setCart(prevCart => ({
            ...prevCart,
            [item_id]: Math.max(0, (prevCart[item_id] || 0) - 1) // Prevent negative cart values
        }));
    };

    const update_amount = (item_id, amount) => {
        setCart(prevCart => ({
            ...prevCart,
            [item_id]: amount
        }));
    };

    const checkout = () => {
        let total = 0;
        Object.keys(cart).forEach((id) => {
            const productData = products.find((product) => product.id === Number(id));

            if (productData) {
                total += productData.price * cart[id];
            }
        });
        return total;
    };



    const contextValue = {
        products,
        cart,
        add_item,
        delete_item,
        update_amount,
        checkout
    };

    console.log("Cart", cart);

    return (
        <cart_data.Provider value={contextValue}>
            {children}
        </cart_data.Provider>
    );
};
