import React from 'react';
import arrow from '@icons/flechita.svg';
import styles from '@styles/Order.module.scss';

const Order = () => {
    return(
        <>
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow.src}
                 alt="arrow"
                 className={styles["arrow-img"]}/>
            </p>
        </div>
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow.src}
                 alt="arrow"
                 className={styles["arrow-img"]}/>
            </p>
        </div>
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow.src}
                 alt="arrow"
                 className={styles["arrow-img"]}/>
            </p>
        </div>
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow.src}
                 alt="arrow"
                 className={styles["arrow-img"]}/>
            </p>
        </div>
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow.src}
                 alt="arrow"
                 className={styles["arrow-img"]}/>
            </p>
        </div>
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow.src}
                 alt="arrow"
                 className={styles["arrow-img"]}/>
            </p>
        </div>
        </>
    );
};

export default Order;