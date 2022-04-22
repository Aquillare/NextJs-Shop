import React,{useContext} from 'react';
import Image from 'next/image';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({product}) => {
    const {addToCart,state,removeFromCart,findInCart,viewProductInfo} = useContext(AppContext);  //recibimos la funcion addToCart del contexto de la app.
    const handleAdd = (item) => {
        addToCart(item);    
    };
    const handleRemove = (item) => {
        removeFromCart(item);
    };

    //funcion para mostrar del detalle de un producto.
    const handleInfo = () =>{
        viewProductInfo(product);
    };

    if(!product.images[0]){
        console.log(product.images);
    }

    return(
        <div className={styles.ProductItem}>
            {/*<Image
            layout='fill'
            //src={product.images[0].includes('http') ? product.images[0] : addToCartImage}
            src={product.image.includes('http') ? product.image : addToCartImage}
            alt={product.title} 
            className={styles["product-img"]}
            width={240}
            height={240}
    />*/}
        {product.images.length > 0 ?
            <img src={product.images[0].includes('https://') ? product.images[0] : addToCartImage.src}
            alt={product.name} 
            className={styles["product-img"]}></img>
        :
        <img src={addToCartImage.src}
        alt={product.name} 
            className={styles["product-img"]}></img>
        }
            
            <div className={styles["product-info"]}> 
                <div className={styles["product-info-text"]}>
                    <p >${product.price}</p>
                    <div className={styles['product-title-container']} role="button" tabIndex={0} onClick={ () => handleInfo()}>
                        <p className={styles['product-title']}>{product.title}</p>
                    </div>  
                </div>
                <div className={styles['figure-container']}>
                    <div 
                    onClick={ () => { findInCart(product) ? handleRemove(product) : handleAdd(product); }}  
                    className={styles["product-info-figure-img"]}
                    role="button"
                    tabIndex={0}
                    >

                        { state.cardsProducts.find( item =>  item.cardId  === product.id)      //busca en cardsProducts un id que sea igual al de product.id
                            ? 
                            state.cardsProducts.map( item => item.cardId  === product.id  //si hay uno igual, usa map sobre cardsProducts, busca el elemento que es igual
                                ? 
                                <img className={styles["product-info-figure-img-added"]} src={addedToCartImage.src} id={`CartImg-${product.id}`} key={item.cardId} alt={"added-cart"}/> //al conseguirlo renderiza una nueva etiqueta Image con la nueva imagen del carrito.
                                : 
                               null) //si no la encuentra no hace nada.
                            : 
                            <Image width='40px' height='40px' className={styles["product-info-figure-img"]} src={addToCartImage} id={`CartImg-${product.id}`} alt={"add-cart"}/>
                            
                        }  {/*si al buscar en cards products un id igual al de product.id no encuentra nada, entonces renderiza la imagen original del carrito en todos los elementos*/}                     
                        
                    </div>         
                </div>   
            </div>
        </div>
    );
};

export default ProductItem;