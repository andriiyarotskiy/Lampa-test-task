import {Dispatch} from "redux";
import {fakeApi} from "../dal/api";
import {MainActionsTypes, setProducts} from "./actions/actions";


let initialState = [] as []


const mainReducer = (state = initialState, action: MainActionsTypes) => {
    switch (action.type) {
        case "main/SET-PRODUCTS": {
            return action.data
        }
        default:
            return state
    }
}

// export const mainReducer = handleActions<any>(
//     {
//         [Actions.setProducts.toString()]: (state, {payload: products}) => {
//             return products
//         },
//     },
//     initialState
// )

// THUNK

export const fetchProductsTC = () => async (dispatch: Dispatch) => {
    try {
        let dataProducts = await fakeApi.getProducts()
        dispatch(setProducts(dataProducts))
    } finally {

    }
}


export default mainReducer;