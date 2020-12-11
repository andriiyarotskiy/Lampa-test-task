import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import basketReducer from "./basketReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    mainState: mainReducer,
    basketState: basketReducer,
    auth: authReducer,
    form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;