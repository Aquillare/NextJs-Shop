import React,{useContext} from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({product}) => {
    const {addToCart,state} = useContext(AppContext);  //recibimos la funcion addToCart del contexto de la app.

    const handleClick = (item) => {
        addToCart(item);    
    }

  

    return(
        <div className="ProductItem">
            <img 
            src={product.images[0]} 
            alt={product.title} 
            className="product-img"
            />
            <div className="product-info"> 
                <div className="product-info-text">
                    <p >${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <div>
                    <figure onClick={() => handleClick(product)} className="produc-info-figure">

                        { state.cardsProducts.find( item =>  item.cardId  == product.id)      //busca en cardsProducts un id que sea igual al de product.id
                            ? 
                            state.cardsProducts.map( item => item.cardId  == product.id  //si hay uno igual, usa map sobre cardsProducts, busca el elemento que es igual
                                ? 
                                <img src={addedToCartImage} id={`CartImg-${product.id}`} key={item.cardId} alt="add-cart"/> //al conseguirlo renderiza una nueva etiqueta img con la nueva imagen del carrito.
                                : 
                                null) //si no la encuentra no hace nada.
                            : 
                            <img src={addToCartImage} id={`CartImg-${product.id}`} alt="add-cart"/>}  {/*si al buscar en cards products un id igual al de product.id no encuentra nada, entonces renderiza la imagen original del carrito en todos los elementos*/}                     
                        
                    </figure>
                </div>   
            </div>
        </div>
    );
};

export default ProductItem;