import React from 'react';
import '@styles/Order.scss';

import arrow from '@icons/flechita.svg';

const Order = () => {
    return(
        <>
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow}
                 alt="arrow"
                 className="arrow-img"/>
            </p>
        </div>
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow}
                 alt="arrow"
                 className="arrow-img"/>
            </p>
        </div>
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow}
                 alt="arrow"
                 className="arrow-img"/>
            </p>
        </div>
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow}
                 alt="arrow"
                 className="arrow-img"/>
            </p>
        </div>
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow}
                 alt="arrow"
                 className="arrow-img"/>
            </p>
        </div>
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src={arrow}
                 alt="arrow"
                 className="arrow-img"/>
            </p>
        </div>
        </>
    );
};

export default Order;