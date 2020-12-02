import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Header} from "./ui/Header/Header";
import {Basket} from "./ui/Basket/Basket";
import {Main} from "./ui/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {selectProductsWithTotal} from './bll/selectors/re-select';
import {restoreState} from "./ui/common/saveToLocalStorage";
import {Actions} from "./bll/actions/actions";

const useStyles = makeStyles(() => ({
    mainPost: {
        paddingTop: 50
    }
}))


export const App = () => {
    const classes = useStyles()

    const productsWithTotal = useSelector<AppRootStateType, any>(selectProductsWithTotal)
    // const {products, total} = useSelector<AppRootStateType, any>(state => state.basketState)

    const dispatch = useDispatch()
    const productsToLocalStorage = useCallback(() =>
        restoreState("productToStorage", productsWithTotal), [productsWithTotal])
    // Restore from local storage
    useEffect(() => {
        dispatch(Actions.setArrProductsToBasket(productsToLocalStorage))
    }, [dispatch, productsToLocalStorage])


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
