import {handleActions} from "redux-actions";
import {Actions} from "./actions/actions";
import {fakeApi} from "../dal/api";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

type ProductType = {
    description: string
    id: string
    price: number
    title: string
    quantity?: number
}

export type initialStateType = {
    products: Array<ProductType>,
    total: number | null
}


let initialState: initialStateType = {
    products: [] as any,
    total: null
}

export const basketReducer = handleActions({
        [`${Actions.addToBasket}`]: (state, {payload: {product}}: any) => {
            let isHaveProduct = state.products.every((pr: any) => pr.id !== product.id)
            if (isHaveProduct) {
                const addQuantity = {...product, quantity: 1}
                return {...state, products: [...state.products, addQuantity]}
            }
            const addQuantity = state.products.map((pr: any) => {
                return pr.id === product.id
                    ? {...pr, quantity: pr.quantity ? pr.quantity + 1 : 2}
                    : pr
            })
            return {...state, products: addQuantity}
        },
        [`${Actions.totalPrice}`]: (state: any) => {
            let totalPrice = state.products.reduce((acc: number, el: any) => {
                return acc += el.price * el.quantity
            }, null)
            return {...state, total: totalPrice}
        },
        [`${Actions.downQuantityInBasket}`]: (state, {payload: id}) => { // <= working like a upQuantity case
            return {
                ...state, products: state.products.map((pr: any) => pr.id === id && pr.quantity > 0 ? {
                    ...pr,
                    quantity: pr.quantity -= 1
                } : pr).filter((el: any) => el.quantity > 0)
            }
        },
        [`${Actions.upQuantityInBasket}`]: (state, {payload: id}) => {
            let newProducts = state.products.map((pr: any) => pr.id === id && pr.quantity > 0 ? {
                ...pr,
                quantity: pr.quantity += 1
            } : pr)
            let newArr = newProducts.filter((el: any) => el.quantity > 0)
            return {...state, products: newArr}
        },
        [`${Actions.setArrProductsToBasket}`]: (state, {payload: {products}}) => {
            return {...state, ...products}
        },
        [`${Actions.clearBasket}`]: (state) => {
            return {...state, products: [], total: null}
        },
    },
    initialState)

export default basketReducer;

// THUNK FOR SEND PRODUCTS

export const sendOrderTC = (formData: any) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    try {
        const {products} = getState().basketState
        const userOrder = {...formData, products}
        let response = await fakeApi.sendingAnOrder(userOrder)
        alert(response)
        dispatch(Actions.clearBasket())
    } finally {

    }
}
