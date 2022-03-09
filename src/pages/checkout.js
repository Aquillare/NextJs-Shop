import Head from 'next/head';
import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  const date = new Date();
  const dateNow = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>

          <div className={styles['Checkout-container']}>
            <div className={styles.order}>
              <p>
                <span>{dateNow}</span>
                <span>{`${state.cart.length} articles`} </span>
              </p>
              <p>
                <span>{`$ ${sumTotal()}`}</span>
              </p>
            </div>
          </div>
          <div className={styles['my-order-content']}>
            {state.cart.map((product) => (
              <OrderItem product={product} key={`checkId-${product.id}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
