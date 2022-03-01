import React,{useContext} from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  const {state} = useContext(AppContext);


  const filters = products.filter( element => element.category.name == state.categoryProduct);
  
  console.log(filters,"filters");

    return(
        <section className="main-container">
          <div className="ProductList">

                    {typeof state.categoryProduct != typeof 0 ?
                        filters.map(product => <ProductItem product={product} key={product.id}/>)
                    :
                    
                       products.map(product => <ProductItem product={product} key={product.id}/>)
                    }
                              
          </div>

        </section>
    );
};

export default ProductList;