import {Dispatch} from "redux";
import {AuthActionsTypes, setUserloginStatus, setUserProfile} from "./actions/actions";


let initialState = {
    isAuth: false,
    user: {
        name: '',
        imageUrl: null
    }
}


const authReducer = (state = initialState, action: AuthActionsTypes) => {
    switch (action.type) {
        case "auth/SET-IS-USER-AUTH": {
            return {...state, isAuth: action.isAuth}
        }
        case "auth/SET-USER-DATA": {
            return {...state, user: action.user}
        }
        default:
            return state
    }
}


// THUNK

export const loginTC = (user: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(setUserloginStatus(true))
        dispatch(setUserProfile(user))
    } finally {

    }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setUserloginStatus(false))
        dispatch(setUserProfile({}))
    } finally {

    }
}


export default authReducer;