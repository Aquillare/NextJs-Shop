import React from 'react';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = () => {
    return(
        <div className={styles.ShoppingCartItem}>
            <figure>
                <img src="https://images.pexels.com/photos/2263815/pexels-photo-2263815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='product'/>
            </figure>
            <p>Game Boy</p>
            <p>$30,00</p>
        </div>
    );
};

export default ShoppingCartItem;