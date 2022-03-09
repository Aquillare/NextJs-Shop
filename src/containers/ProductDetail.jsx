import React, { useContext } from "react";
import ProductInfo from '@components/ProductInfo';
import iconClose from '@icons/icon_close.png';
import AppContext from "@context/AppContext";
import styles from '@styles/ProductDetail.module.scss';


const ProductDetail = () => {

    const {closeProductInfo} = useContext(AppContext)

    return(
        <div className={styles.ProductDetail}>
            <div className={styles["ProductDetail-close"]} onClick={() => closeProductInfo()}>
                <img src={iconClose.src} alt="close"/>
            </div>
            <ProductInfo/>
        </div>
    );
};

export default ProductDetail;