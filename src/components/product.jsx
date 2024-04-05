
import React, {useContext, useState} from "react";
import {cart_data} from "./shop_data";
import "./product.css";

export const Product = ({ data }) => {
    const {id, title, price, rating, images } = data;
    const {cart, add_item} = useContext(cart_data);
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage(prev => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveImage(prev => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={"product"}>
            <div className={"image_container"}>
                <button onClick={prevImage} className="btn btn-prev">
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </button>
                <img className="product-image" src={images[activeImage]} alt={title} />
                <button onClick={nextImage} className="btn btn-next">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>


                <div className={"image-slider-dots"}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeImage ? 'active' : ''}`}
                            onClick={() => setActiveImage(index)}
                        ></span>
                    ))}
                </div>

            </div>

            <div className={"description"}>
                <p><b>{title}</b></p>
                <p>${price}</p>
                <p><span style={{ color: 'goldenrod' }}>&#9733;</span> {rating}</p>
                <button onClick={() => add_item(id)}> add to cart
                    ({cart[id]})
                </button>

            </div>

        </div>
    );
};
