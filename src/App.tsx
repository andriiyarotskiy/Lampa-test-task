import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import {Header} from "./ui/Header/Header";
import {Basket} from "./ui/Basket/Basket";
import {Main} from "./ui/Main/Main";
import {restoreState} from "./ui/common/saveToLocalStorage";
import {Actions} from "./bll/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";


export const App = () => {

    const {products, total} = useSelector<AppRootStateType, any>(state => state.basketState)

    const dispatch = useDispatch()

    // Restore from local storage
    useEffect(() => {
        const productsToLocalStorage = restoreState("productToStorage", {products, total})
        dispatch(Actions.setArrProductsToBasket(productsToLocalStorage))
    }, [dispatch])

    return (

        <div className="App">
            <Header/>
            <Switch>
                <Route path="/basket">
                    <Basket/>
                </Route>
                <Route exact path="/">
                    <Main/>
                </Route>
            </Switch>
        </div>

    )

}

export default App;
