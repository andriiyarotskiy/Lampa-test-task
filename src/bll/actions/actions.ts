import {createActions} from "redux-actions";


export const Actions = createActions({
    setProducts: (data) => (data),
    totalPrice: () => {},
    addToBasket: (product) => ({product}),
    downQuantityInBasket: (id) => (id),
    upQuantityInBasket: (id)=> (id),
});

