import React , {useContext} from "react";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss/";
import arrow from '@icons/flechita.svg';
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";


const MyOrder = () => {
    const {state} = useContext(AppContext);

    
    const sumTotal = () => {
        const reducer = (accumulator,currentValue) => accumulator+currentValue.price;
        const sum = state.cart.reduce(reducer, 0);

        return sum;
    }

    return(
        <aside className="MyOrder">
            <div className="title-container">
                <img src={arrow} alt="arrow"/>
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map( product => 
                  <OrderItem product={product} key={`OrderItem-${product.id}`}/>)
                  }  {/*Usamos `orderoItem-${}` para agregar un texto al numero del id y asi no tener conflictos ya que usamos es id en el key del map que usamos en el compoenente productList */}        

                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                   <Link to="/checkout"> <button 
                    type="button"
                    className="primary-button"  
                    >
                        Checkout
                    </button></Link>
                </div>
        </aside>
    );
};

export default MyOrder; 