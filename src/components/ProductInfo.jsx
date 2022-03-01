import React from 'react';
import '@stylesProductInfo.scss';
import addToCart from'@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return(
        <>
            <img src="https://images.pexels.com/photos/2263815/pexels-photo-2263815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Game boy"/>
            <div className="ProductInfo">
                <p>$35,00</p>
                <p>Game boy</p>
                <p>Is a very funny game console</p>
                <button 
                type="button"
                className="primary-button add-to-cart-button"  
                >
                    <img src={addToCart} alt="add to cart"/>
                    Add to cart
                </button>
            </div> 
        </>
    );
};

export default ProductInfo;