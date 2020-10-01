import React from 'react';
import './App.css';
import {HashRouter, Link, Switch, Route} from "react-router-dom";
import {Header} from "./ui/Header/Header";
import {Basket} from "./ui/Basket/Basket";
import {Main} from "./ui/Main/Main";

const App = () => {
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
