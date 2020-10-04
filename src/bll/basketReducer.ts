import {handleActions} from "redux-actions";
import {Actions} from "./actions/actions";

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
    products: [],
    total: null
}

export const basketReducer = handleActions({

        [Actions.addToBasket.toString()]: (state, {payload: {product}}: any) => {
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
        [Actions.totalPrice.toString()]: (state: any) => {
            let totalPrice = state.products.reduce((acc: number, el: any) => {
                return acc += (el.price) * el.quantity
            }, null)
            return {...state, total: totalPrice}
        },
        [Actions.downQuantityInBasket.toString()]: (state, {payload: id}) => { // <= working like a upQuantity case
            return {
                ...state, products: state.products.map((pr: any) => pr.id === id && pr.quantity > 0 ? {
                    ...pr,
                    quantity: pr.quantity -= 1
                } : pr).filter((el: any) => el.quantity > 0)
            }
        },
        [Actions.upQuantityInBasket.toString()]: (state, {payload: id}) => {
            let newProducts = state.products.map((pr: any) => pr.id === id && pr.quantity > 0 ? {
                ...pr,
                quantity: pr.quantity += 1
            } : pr)
            let newArr = newProducts.filter((el: any) => el.quantity > 0)
            return {...state, products: newArr}
        },
    },
    initialState)

export default basketReducer;


// [addProducts.upQuantityInCart.toString()]: (state, id) => { // payload = {...}
//     debugger
//     let addProduct = state.products.filter((pr: any) => pr.id === id ? pr.quantity += 1 : pr)
//     return {...state, products: addProduct}
// },
// [addProducts.downQuantityFromCart.toString()]: (state, id) => { // payload = {...}
//     let removeProduct = state.products.filter((pr: any) => pr.id === id ? pr.quantity -= 1 : pr)
//     return {...state, products: removeProduct}
// },

// [addProducts.addToBasket.toString()]: (state, {payload: {product, inCart}}) => {
//     if (!inCart) {
//         initialState.products.map((el: any) => {
//             if (product.id === el.id) {
//                 el.quantity += 1;
//             }
//         });
//         initialState.inCart = true;
//     }
//     if (inCart) return;
//     state.products.push(product)
// },