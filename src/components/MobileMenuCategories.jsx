import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import { useRouter } from "next/router";
import styles from '@styles/MobileMenuCategories.module.scss';

const MobileMenuCategories = ({handleToggleMobileMenu}) => {

    const router = useRouter();

    const {selectCategory} = useContext(AppContext);
    const handleCategory = (category) => {
        selectCategory(category);
        handleToggleMobileMenu();
        router.push('/');

    };

    return(
        <ul className={styles.MobileMenuCategories}>

            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>handleCategory(0)}>All</button> 
            </li>
                                
            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>handleCategory('Clothes')}>Clothes</button> 
            </li>
                            
            <li >
                <button className={styles["MobileMenuCategories_button"]} onClick={()=>handleCategory('Electronics')}>Electronics</button> 
            </li>
                                
            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>handleCategory('Furniture')}>Furnitures</button> 
            </li>

            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>handleCategory('Shoes')}>Shoes</button> 
            </li>

            <li>
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>handleCategory('Others')}>Others</button> 
            </li>
        </ul>
    );
};

export default MobileMenuCategories;