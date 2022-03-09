import React,{useContext} from 'react';
import ProductDetail from './ProductDetail';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductList.module.scss';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  const {state} = useContext(AppContext);


  const filters = products.filter( element => element.category.name == state.categoryProduct);
  

    return(
        <section className={styles["main-container"]}>
          <div className={styles.ProductList}>

                    {typeof state.categoryProduct != typeof 0 ?
                        filters.map(product => <ProductItem product={product} key={product.id}/>)
                    :
                    
                       products.map(product => <ProductItem product={product} key={product.id}/>)
                    }
                              
          </div>
          {(state.productInfo.length > 0)  && <ProductDetail/>}          
        </section>
    );
};

export default ProductList;