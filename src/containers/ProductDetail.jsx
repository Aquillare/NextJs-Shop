import React from "react";
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
    return(
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src="./src/static/icons/icon_close.png" alt="close"/>
            </div>
            <ProductInfo/>
        </aside>
    );
};

export default ProductDetail;