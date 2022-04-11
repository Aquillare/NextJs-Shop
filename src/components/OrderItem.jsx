import React, {useContext} from "react";
import Image from "next/image";
import AppContext from "@context/AppContext";
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product}) => {

    const {removeFromCart} = useContext(AppContext);

    const handleRemove = (product) => {
        removeFromCart(product);
    };

  return(
        <div className={styles.OrderItem}>
            
                  {/*<Image src={product.images[0]} alt={product.title} width='70px' height='70px' layout='fixed'/>*/}
                   <img src={product.image.includes('http') ? product.image : null}
            alt={product.title} 
            className={styles["product-img"]}></img>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <Image className={styles["close-image"]} src={close.src} onClick={() => handleRemove(product)}alt="close" width='14px' height='14px' layout='fixed'/>
        </div>
        );
    
};

export default OrderItem;