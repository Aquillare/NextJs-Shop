import React , {useContext} from "react";        
import OrderItem from '../components/OrderItem';
import '../styles/Checkout.scss';
import AppContext from '../context/AppContext';
import Header from "../components/Header";

const Checkout = () => {

    const {state} = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);

        return sum;
    }

    const date = new Date();
    const dateNow = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;


    return(
        <>
        <Header/>
        <div className="Checkout">

            <div className="Checkout-container">
                <h1 className="title">My order</h1>

                <div className="Checkout-content">

                    <div className="order">
                        <p>
                            <span>{dateNow}</span>
                            <span>{`${state.cart.length} articles`} </span>
                        </p>
                        <p>
                            <span>{`$ ${sumTotal()}`}</span>
                        </p>
                    </div>
                </div>
                <div className="my-order-content">
                {
                    state.cart.map( product =>
                        <OrderItem product={product} key={`checkId-${product.id}`} />)
                }
                
                </div>
               
            </div>
        </div>
        </>        
    );
};

export default Checkout;