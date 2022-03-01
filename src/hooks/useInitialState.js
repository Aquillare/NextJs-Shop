
 import {useState} from 'react';

const initialState = {
    cart: [],
    cardsProducts:[],
    categoryProduct:0,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        state.cart.find( item => item.id == payload.id) ? null :
        setState({
            ...state,      //indica que traiga la info de state
            cart: [...state.cart, payload],   //...state.cart ,trae lo que ya existe
            cardsProducts: [...state.cardsProducts, {cardId:payload.id , added:true}],
        });
    };
    
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id),
            cardsProducts: state.cardsProducts.filter(items => items.cardId != payload.id),
        });
        console.log(state.cardsProducts);
    };

    const selectCategory = (payload) => {
        setState({
            ...state,
            categoryProduct:payload,
        });
    };


    return{
        state,
        addToCart,
        removeFromCart,
        selectCategory
    };
};

export default useInitialState;