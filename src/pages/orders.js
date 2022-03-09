import React from "react";
import Order from '@components/Order';
import styles from '@styles/Orders.module.scss';


const Orders = () => {
    return(
        <>
        <div className={styles.Orders}>
            <div className={styles["Orders-container"]}>
                <h1 className={styles.title}>My orders</h1>
                
                <div className={styles["Orders-content"]}>
                        <Order/>    
                </div>

            </div>
        </div>    
        </>  
    );
};

export default Orders;