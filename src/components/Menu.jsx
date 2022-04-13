import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Menu.module.scss';


const Menu = () => {
  const auth = useAuth();
  const {toggleMenu} = useContext(AppContext);

    return(
        <div className={styles.Menu}>
            <ul>
                <li>
                   <Link href="/orders" passHref>
                     <button className={styles['menu_button']} onClick={toggleMenu}>
                       My Orders
                     </button> 
                   </Link>

                </li>
                <li>
                  <Link href="/account" passHref>
                     <button className={styles['menu_button']} onClick={toggleMenu}>
                       My Account
                     </button>  
                  </Link> 
                    
                </li>
                <li>
                  <button className={styles['menu_button2']} onClick={() => {auth.logout(); toggleMenu()}}>
                       Sign out
                     </button>  
                  
                  {/*<Link href="/login" passHref>
                     
                  </Link> */}
                </li>
            </ul>
        </div>
    );
};

export default Menu;