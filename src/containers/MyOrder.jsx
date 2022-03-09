import React , {useContext} from "react";
import Image from "next/image";
import OrderItem from "@components/OrderItem";
import arrow from '@icons/flechita.svg';
import AppContext from "../context/AppContext";
import Link from "next/link";
import styles from '@styles/MyOrder.module.scss';


const MyOrder = () => {
    const {state, toggleOrders} = useContext(AppContext);

    
    const sumTotal = () => {
        const reducer = (accumulator,currentValue) => accumulator+currentValue.price;
        const sum = state.cart.reduce(reducer, 0);

        return sum;
    }

    return(
        <aside className={styles.MyOrder}>
            <div className={styles["title-container"]}>
                <Image src={arrow} alt="arrow"/>
                <p className={styles.title}>My order</p>
            </div>
            <div className={styles["my-order-content"]}>
                {state.cart.map( product => 
                  <OrderItem product={product} key={`OrderItem-${product.id}`}/>)
                  }  {/*Usamos `orderoItem-${}` para agregar un texto al numero del id y asi no tener conflictos ya que usamos es id en el key del map que usamos en el compoenente productList */}        

               
            </div>
            <div className={styles.order}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
            </div>
            <Link
                    href="/checkout"  
                    >
                        <button
                            onClick={toggleOrders}
                            className={styles["primary-button"]}
                        >
                            Checkout
                        </button>
                        
            </Link>
        </aside>
    );
};

export default MyOrder; 