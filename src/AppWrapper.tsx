import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {App} from './ui/App';
import {HashRouter} from "react-router-dom";
import UseLocalStorage from "./utils/useLocalStorage";

const AppWrapper = () => {

    const products = useSelector<AppRootStateType, any>(state => state.basketState)


    const [value, setValue] = UseLocalStorage("productToStorage", products)

    // save products from Cart to local storage
    useEffect(() => {
        setValue(products)
    }, [setValue,products])

    return (
        <HashRouter>
            <App/>
        </HashRouter>
    )

}

export default AppWrapper;
