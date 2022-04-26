import React,{ useState } from 'react';
import Link from 'next/link';
import MobileMenuCategories from './MobileMenuCategories';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/MobileMenu.module.scss';


const MobileMenu = ({handleToggleMobileMenu}) =>{

    const auth = useAuth();

    const [toggleCategories, setCategories] = useState(false);

    const handleToggleCategories = () => {
        setCategories(!toggleCategories);
    };

    


    return(
        <>
            <div className={styles['MobileMenu_container']} onClick={ () => handleToggleMobileMenu()} role='button' tabIndex={0}>
            </div>
            <div className={styles.MobileMenu}>

                <ul className={styles["MobileMenu_ul"]}>

                    <li className={styles["MobileMenu_li"]}>
                        <button className={styles['MobileMenu_li_button']} onClick={() => handleToggleMobileMenu() }>
                            <Link href="/orders" >My Orders</Link>
                        </button>
                    </li>

                    <li className={styles["MobileMenu_li"]}>
                        <button className={styles['MobileMenu_li_button']} onClick={() => handleToggleMobileMenu() }>
                            <Link href="/account" >My Acount</Link>
                        </button>
                    </li>

                    <li className={styles["MobileMenu_li"]}>
                        <button className={styles["MobileMenu_categories"]} onClick={handleToggleCategories}>Categories</button> 
                        
                        {toggleCategories && <MobileMenuCategories handleToggleMobileMenu={handleToggleMobileMenu}/>}
                    </li>

                    {auth.user ?
                        <li className={styles["MobileMenu_li"]}>
                          <button className={styles['MobileMenu_li_button']} onClick={() =>{auth.logout();handleToggleMobileMenu() }  }>
                            <Link href="/login" >Sign Out</Link>
                          </button>
                        </li>
                    :
                        <li className={styles["MobileMenu_li"]}>
                             <button className={styles['MobileMenu_li_button']} onClick={() => handleToggleMobileMenu() }>
                            <Link href="/login" >Sign In</Link>
                            </button>
                        </li>
                    }
                </ul>

            </div>
        </>
        
        
       
    );
};

export default MobileMenu;