import React,{ useState } from 'react';
import Link from 'next/link';
import MobileMenuCategories from './MobileMenuCategories';
import styles from '@styles/MobileMenu.module.scss';


const MobileMenu = () =>{

    const [toggleCategories, setCategories] = useState(false);

    const handleToggleCategories = () => {
        setCategories(!toggleCategories);
    };


    return(
        <div className={styles.MobileMenu}>

            <ul className={styles["MobileMenu_ul"]}>

                <li className={styles["MobileMenu_li"]}>
                   <Link href="/orders">My Orders</Link> 
                </li>

                <li className={styles["MobileMenu_li"]}>
                   <Link href="/account">My Account</Link> 
                </li>

                <li className={styles["MobileMenu_li"]}>
                    <button className={styles["MobileMenu_categories"]} onClick={handleToggleCategories}>Categories</button> 
                    
                    {toggleCategories && <MobileMenuCategories/>}
                </li>

                <li className={styles["MobileMenu_li"]}>
                   <Link href="/login">Sign out</Link>
                </li>
            </ul>
           
        </div>
       
    );
};

export default MobileMenu;