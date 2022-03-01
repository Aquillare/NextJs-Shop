import React,{useState, useContext}from 'react';
import '@styles/Header.scss';


import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@components/MobileMenu';
import { Link } from 'react-router-dom';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setMobileMenu] = useState(false);

    

    const {state,selectCategory} = useContext(AppContext); //traigo el estado del contexto de la app. //los usamos para mostrar la cantidad de elementos en el div del carrito

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
    };

    const handleToggleMobileMenu = () =>{
        setMobileMenu(!toggleMobileMenu);
    }

    console.log(state)

    return(  
        <nav>
            <img 
            src={menu}
            alt="menu"
            className="menu"
            onClick={handleToggleMobileMenu}
            />

            <div className="navbar-left">
                <img 
                src={logo}
                alt="logo"
                className="logo-nav"
                />

                <ul>
                    <li>
                        <Link to="/" onClick={()=>selectCategory(0)}>All</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>selectCategory('Clothes')}>Clothes</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>selectCategory('Electronics')} >Electronics</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>selectCategory('Furniture')}>Furnitures</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>selectCategory('Toys')}>Toys</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>selectCategory('Others')}>Others</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-rigth">
                <ul>
                    <li>
                        <p className="navbar-email" onClick={handleToggle}>platzi@example.com</p>
                    </li>
                    <li className="navbar-shopping-cart"
                    onClick={handleToggleOrders}>
                        <img
                        src={shoppingCart}
                        alt="shopping cart"
                        />
                        {state.cart.length > 0 ?<div>{state.cart.length}</div>: null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            {toggleOrders && <MyOrder/>}
            {toggleMobileMenu && <MobileMenu/>}

            
        </nav>
    );
};

export default Header;