import React,{ useState,useContext}from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@components/MobileMenu';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Header.module.scss';

const Header = () => {
    const [toggleMobileMenu, setMobileMenu] = useState(false);
    const auth = useAuth();

   

    const {state,selectCategory,toggleMenu,toggleOrders} = useContext(AppContext); //traigo el estado del contexto de la app. //los usamos para mostrar la cantidad de elementos en el div del carrito

    const handleToggleMobileMenu = () =>{
        setMobileMenu(!toggleMobileMenu);
    };

    const home = '/';

    return(  
        <nav className={styles.Nav}>
            
            <div
            className={styles.menu}
            role="button"
            tabIndex={0}
            onClick={()=> handleToggleMobileMenu() }>
                <img
                src={menuIcon.src}
                alt="menu"
                width={25}
                height={25}
                />
            </div>
            

             <Link className='logo-container' href={home} passHref>
                <img
                    src={logo.src}
                    alt="logo"
                    className={styles["logo-nav"]}
                    width={100}
                    height={30}
                    />
            </Link>   
           
            
          

            <div className={styles["navbar-left"]}>

                <ul className={styles["navbar-left_ul"]}>
                    <li>
                       <Link href={home} passHref>
                            <button onClick={()=>selectCategory(0)}>All</button>
                       </Link> 
                      
                    </li>
                    <li>
                        <Link href={home} passHref>
                            <button onClick={()=>selectCategory('4444')}>Clothes</button>
                        </Link>
                       
                    </li>
                    <li>
                        <Link href={home} passHref>
                            <button onClick={()=>selectCategory('Electronics')} >Electronics</button> 
                        </Link>
                        
                    </li>
                    <li>
                         <Link href={home} passHref>
                            <button onClick={()=>selectCategory('Furniture')}>Furnitures</button>
                        </Link>
                        
                    </li>
                    <li>
                         <Link href={home} passHref>
                            <button onClick={()=>selectCategory('Shoes')}>Shoes</button>
                        </Link>
                        
                    </li>
                    <li>
                         <Link href={home} passHref>
                             <button onClick={()=>selectCategory('Others')}>Others</button>
                        </Link>
                       
                    </li>
                </ul>

            </div>

            

            <div className={styles["navbar-rigth"]}>
                {auth.user? 
                    <ul>
                        <li>
                            <button className={styles["navbar-email"]} onClick={toggleMenu}>{auth.user.email        }</button>
                        </li>
                        <li className={styles["navbar-shopping-cart"]} >
                            <div onClick={toggleOrders} role="button" tabIndex={0}>
                                <Image
                                src={shoppingCart}
                                alt="shopping cart"
                                /> 
                                {state.cart.length > 0 ?<div className={styles['shopping-cart-counter']}>{state.cart.length}</div>: null}
                            </div>
                        
                        </li>
                    </ul>
                :
                    <ul>
                        <li>
                        <Link href="/login" passHref>
                            <button className={styles["navbar-email"]} >{'signIn'}</button>
                        </Link>     
                        </li>
                        <li className={styles["navbar-shopping-cart"]} >
                            <div onClick={toggleOrders} role="button" tabIndex={0}>
                                <Image
                                src={shoppingCart}
                                alt="shopping cart"
                                /> 
                                {state.cart.length > 0 ?<div className={styles['shopping-cart-counter']}>{state.cart.length}</div>: null}
                            </div>
                        
                        </li>
                    </ul>
                }
                
            </div>
            {state.toggle.toggleMenu && <Menu/>}
            {state.toggle.toggleOrders && <MyOrder/>}
            {toggleMobileMenu && <MobileMenu handleToggleMobileMenu={handleToggleMobileMenu}/> }

            
        </nav>
    );
};

export default Header;
