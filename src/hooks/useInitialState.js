import { useState } from 'react';

const initialState = {
  cart: [],
  cardsProducts: [],
  categoryProduct: 0,
  productInfo:[],
  toggle:{
    toggleMenu:false,
    toggleOrders:false,
  }
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    state.cart.find((item) => item.id == payload.id)
      ? null
      : setState({
          ...state, //indica que traiga la info de state
          cart: [...state.cart, payload], //...state.cart ,trae lo que ya existe
          cardsProducts: [...state.cardsProducts, { cardId: payload.id, added: true }],
        });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
      cardsProducts: state.cardsProducts.filter((items) => items.cardId != payload.id),
    });
  };

  const findInCart = (payload) => {
    if(state.cardsProducts.length > 0){
      const productSearch = state.cardsProducts.filter( item => item.cardId == payload.id); //filter devuelve un array con el valor si lo encuentra, sino un array vacio
      
      if(productSearch.length > 0){
        return true;
      }
      return false;
    } 
    return false;  
  }

  const selectCategory = (payload) => {
    setState({
      ...state,
      categoryProduct: payload,
    });
  };

  const viewProductInfo = (payload) => {
    setState({
      ...state,
      productInfo : [payload],
    });
  }

  const closeProductInfo = (payload) => {
   
    state.productInfo.length > 0 ? 

    setState({
      ...state,
      productInfo : [],
    })

    :
    null
  }

  const toggleMenu = (payload) => {
      setState({
        ...state,
        toggle:{
          ...state.toggle,
          toggleMenu:!state.toggle.toggleMenu
        },
      });
  }

  const toggleOrders = (payload) => {
    setState({
      ...state,
      toggle:{
        ...state.toggle,
        toggleOrders:!state.toggle.toggleOrders
      },
    });
  }

  return {
    state,
    addToCart,
    removeFromCart,
    selectCategory,
    findInCart,
    viewProductInfo,
    closeProductInfo,
    toggleMenu,
    toggleOrders
  };
};

export default useInitialState;
