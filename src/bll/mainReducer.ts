import {Dispatch} from "redux";
import {handleActions} from "redux-actions";
import {fakeApi} from "../dal/api";
import {Actions} from "./actions/actions";


let initialState = [] as []

export const mainReducer = handleActions<any>(
    {
        [Actions.setProducts.toString()]: (state, {payload: products}) => {
            return products
        },
    },
    initialState
)

// THUNK

export const fetchProductsTC = () => async (dispatch: Dispatch) => {
    try {
        let dataProducts = await fakeApi.getProducts()
        dispatch(Actions.setProducts(dataProducts))
    } finally {

    }
}


export default mainReducer;