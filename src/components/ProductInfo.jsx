import React, { useContext } from 'react';

import addToCartIcon from'@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';
import AppContext from '@context/AppContext';

const ProductInfo = () => {

    const {state, addToCart, removeFromCart, findInCart} = useContext(AppContext);
    const product = {...state.productInfo[0]};

    //funcion para añadir el producto al carrito o removerlo del carrito
    const handleAddToCart = () => {
        findInCart(product) 
        ? 
        removeFromCart(product)
        : 
        addToCart(product);
    };

    return(
        <>
           {/* <Image src={product.images[0]} alt={product.title} height='260px' width='360px'  layout='responsive'/> */}
           <img src={product.image.includes('http') ? product.image : null}
            alt={product.name} 
            className={styles["product-img"]}
            ></img>
            <div className={styles.ProductInfo}>
                <p>{product.price}</p>
                <p>{product.name}</p>
                <p>{product.description}</p>
                {
                    findInCart(product)
                    ?
                    <button 
                    type="button"
                    className={styles["secondary-button"]}
                    onClick={()=> handleAddToCart()}  
                    >
                       <>Remove from cart</> 
                    </button>
                    :
                    <button 
                    type="button"
                    className={styles["primary-button"]}
                    onClick={()=> handleAddToCart()}  
                    >
                        <img src={addToCartIcon.src} alt="add to cart"/>
                       <>Add to cart</> 
                    </button>
                }
               
            </div> 
        </>
    );
};

export default ProductInfo;