import {BasketActionsTypes, clearBasket} from "./actions/actions";
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

const basketReducer = (state: initialStateType = initialState, action: BasketActionsTypes): initialStateType => {
    switch (action.type) {
        case 'basket/ADD-PRODUCTS-TO-BASKET': {
            let isHaveProduct = state.products.every((pr) => pr.id !== action.product.id)
            if (isHaveProduct) {
                const addQuantity = {...action.product, quantity: 1}
                return {...state, products: [...state.products, addQuantity]}
            }
            const addQuantity = state.products.map((pr) => {
                return pr.id === action.product.id
                    ? {...pr, quantity: pr.quantity ? pr.quantity + 1 : 2}
                    : pr
            })
            return {...state, products: addQuantity}
        }
        case 'basket/TOTAL-PRICE': {
            let totalPrice = state.products.reduce((acc: any, el: any) => {
                return acc += el.price * el.quantity
            }, null)
            return {...state, total: totalPrice}
        }
        case 'basket/DEC-QUANTITY-PRODUCTS': { // <= working like a upQuantity case
            return {
                ...state, products: state.products.map((pr: any) => pr.id === action.id && pr.quantity > 0 ? {
                    ...pr,
                    quantity: pr.quantity -= 1
                } : pr).filter((el: any) => el.quantity > 0)
            }
        }
        case 'basket/INC-QUANTITY-PRODUCTS': {
            let newProducts = state.products.map((pr: any) => pr.id === action.id && pr.quantity > 0 ? {
                ...pr,
                quantity: pr.quantity += 1
            } : pr)
            let newArr = newProducts.filter((el: any) => el.quantity > 0)
            return {...state, products: newArr}
        }
        case 'basket/SET-PRODUCTS-TO-BASKET': {
            return {...state, ...action.products}
        }
        case 'basket/CLEAR-BASKET': {
            return {...state, products: [], total: null}
        }
        case "basket/REMOVE-SINGLE-PRODUCTS": {
            return {...state, products: state.products.filter(p => p.id !== action.id)}
        }
        default :
            return state
    }
}

export default basketReducer;

// THUNK FOR SEND PRODUCTS

export const sendOrderTC = (formData: any) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    try {
        const {products}: any = getState().basketState
        const userOrder = {...formData, products}
        let response = await fakeApi.sendingAnOrder(userOrder)
        alert(response)
        dispatch(clearBasket())
    } finally {

    }
}
