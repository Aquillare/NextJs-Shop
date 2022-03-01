import React from 'react';
import '@styles/ShoppingCartItem.scss';

ShoppingCartItem = () => {
    return(
        <div className="ShoppingCartItem">
            <figure>
                <img src="https://images.pexels.com/photos/2263815/pexels-photo-2263815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            </figure>
            <p>Game Boy</p>
            <P>$30,00</P>
        </div>
    );
};

export default ShoppingCartItem;