import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Header} from "./ui/Header/Header";
import {Basket} from "./ui/Basket/Basket";
import {Main} from "./ui/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {restoreState} from "./ui/common/saveToLocalStorage";
import {setProductsToBasket} from "./bll/actions/actions";
import {selectProductsWithTotal} from './bll/selectors/re-select';

const useStyles = makeStyles(() => ({
    mainPost: {
        paddingTop: 50
    }
}))


export const App = () => {
    const classes = useStyles()


    const productsWithTotal  = useSelector<AppRootStateType, any>(selectProductsWithTotal)
    const dispatch = useDispatch()


    const productsToLocalStorage = restoreState("productToStorage", productsWithTotal)
    // Restore from local storage


    useEffect(() => {
        dispatch(setProductsToBasket(productsToLocalStorage))
    }, [dispatch])


    return (
        <>
            <Header/>
            <main>
                <div className={classes.mainPost}>
                    <Container maxWidth="lg">
                        <Switch>
                            <Route exact path="/" render={() => <Main/>}>
                            </Route>
                            <Route path="/basket" render={() => <Basket/>}>
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;
