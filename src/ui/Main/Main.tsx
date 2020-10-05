import React, {useEffect} from "react"
import {Product, ProductType} from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {fetchProductsTC} from "../../bll/mainReducer";
import {Actions} from "../../bll/actions/actions";
import {Grid} from "@material-ui/core";


export const Main = () => {

    const data = useSelector<AppRootStateType, any>(state => state.mainState)

    const dispatch = useDispatch()

    useEffect(() => {
        const thunk = fetchProductsTC();
        dispatch(thunk)
    }, [dispatch])

    const onClickHandler = (id: string) => {
        let product = data.find((pr: ProductType) => pr.id === id)
        dispatch(Actions.addToBasket({...product, quantity: 1}))
        dispatch(Actions.totalPrice())
    }

    return (
        <Grid container spacing={6}>
            {data.map((el: ProductType) => {
                return <Product
                    key={el.id}
                    title={el.title}
                    description={el.description}
                    price={el.price}
                    id={el.id}
                    onClickHandler={onClickHandler}
                    image={el.image}
                />
            })}

        </Grid>
    )
}