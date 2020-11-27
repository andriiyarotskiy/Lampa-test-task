import { createSelector } from 'reselect'
import {AppRootStateType} from "../store";

export const products = (state: AppRootStateType) => state.basketState.products
export const total = (state: AppRootStateType) => state.basketState.total


export const selectorTotalPrice = createSelector(
    products,
    products => products.reduce((acc:any, el: any)=>{
        return acc += el.price * el.quantity
    }, null)
);

export const selectProductsWithTotal = createSelector(
    [products,selectorTotalPrice],
    (products, total) => {
        return {...products, total}
    }
);
