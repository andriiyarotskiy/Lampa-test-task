import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import {Header} from "./ui/Header/Header";
import {Basket} from "./ui/Basket/Basket";
import {Main} from "./ui/Main/Main";
import {saveState} from "./ui/common/saveToLocalStorage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";

const App = () => {

    const products = useSelector<AppRootStateType, any>(state => state.basketState)

    // save products from Cart to local storage
    useEffect(() => {
        saveState("productToStorage", products);
    }, [products])

    return (
        <HashRouter>
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
        </HashRouter>
    )

}

export default App;
