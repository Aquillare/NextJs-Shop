import React, { useContext, useState } from 'react';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addToCartIcon from'@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';
import AppContext from '@context/AppContext';


const ProductInfo = () => {

    const {state, addToCart, removeFromCart, findInCart} = useContext(AppContext);
    const product = {...state.productInfo[0]};

    const [counter,setCounter] = useState(0);
    console.log(counter);

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
             {product.images.length > 0 ?
                <img src={product.images[counter].includes('https://') ? product.images[counter] : addToCartImage.src}
                alt={product.name} 
                className={styles["product-img"]}></img>
                :
                <img src={addToCartImage.src}
                alt={product.name} 
                    className={styles["product-img"]}></img>
            }
            <button type='button' onClick={ () => counter >= product.images.length -1 ? setCounter(0) : setCounter(counter + 1)}></button>
            <div className={styles.ProductInfo}>
                <p>{product.price}</p>
                <p>{product.title}</p>
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