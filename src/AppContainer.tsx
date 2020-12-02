import React, {useEffect} from 'react';
import './App.css';
import {saveState} from "./ui/common/saveToLocalStorage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {App} from './App';
import {HashRouter} from "react-router-dom";

const AppContainer = () => {

    const products = useSelector<AppRootStateType, any>(state => state.basketState)

    // save products from Cart to local storage
    useEffect(() => {
        saveState("productToStorage", products);
    }, [products])

    return (
        <HashRouter>
            <App/>
        </HashRouter>
    )

}

export default AppContainer;
