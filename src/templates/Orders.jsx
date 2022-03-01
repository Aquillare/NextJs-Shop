import React, {useContext} from "react";
import Order from '../components/Order';
import '../styles/Orders.scss';
import AppContext from "../context/AppContext.js";
import Header from "../components/Header";


const Orders = () => {

    const {state} = useContext(AppContext);

   


    return(
        <>
        <Header/>
        <div className="Orders">
            <div className="Orders-container">
                <h1 className="title">My orders</h1>
                
                <div className="Orders-content">
                        <Order/>    
                </div>

            </div>
        </div>    
        </>  
    );
};

export default Orders;