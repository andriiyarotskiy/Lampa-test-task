import {applyMiddleware, combineReducers, createStore} from "redux";
import basketReducer from "./basketReducer";
import mainReducer from "./mainReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    mainState: mainReducer,
    basketState: basketReducer,
    form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;