import React, { useContext } from 'react';

import addToCartIcon from'@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';
import AppContext from '@context/AppContext';

const ProductInfo = () => {

    const {state, addToCart} = useContext(AppContext);
    const product = {...state.productInfo[0]};

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
                <button 
                type="button"
                className={styles["primary-button"]}
                onClick={()=>addToCart(product)}  
                >
                    <img src={addToCartIcon.src} alt="add to cart"/>
                   <>Add to cart</> 
                </button>
            </div> 
        </>
    );
};

export default ProductInfo;