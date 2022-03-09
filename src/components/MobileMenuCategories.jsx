import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import styles from '@styles/MobileMenuCategories.module.scss';

const MobileMenuCategories = () => {

    const {selectCategory} = useContext(AppContext);

    return(
        <ul className={styles.MobileMenuCategories}>

            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>selectCategory(0)}>All</button> 
            </li>
                                
            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=> selectCategory('Clothes')}>Clothes</button> 
            </li>
                            
            <li >
                <button className={styles["MobileMenuCategories_button"]} onClick={()=>selectCategory('Electronics')}>Electronics</button> 
            </li>
                                
            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>selectCategory('Furniture')}>Furnitures</button> 
            </li>

            <li >
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>selectCategory('Toys')}>Toys</button> 
            </li>

            <li>
                <button className={styles["MobileMenuCategories_button"]}  onClick={()=>selectCategory('Others')}>Others</button> 
            </li>
        </ul>
    );
};

export default MobileMenuCategories;