import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {ProductInBasket} from "./ProductInBasket";
import {ProductType} from "../Main/Product/Product";
import FormBasket from "./UserForm";
import {Paper, Typography} from "@material-ui/core";
import {decQuantityProducts, incQuantityProducts, totalPrice} from "../../bll/actions/actions";


export const Basket = () => {
    const {products, total} = useSelector<AppRootStateType, any>(state => state.basketState)

    const dispatch = useDispatch()


    const onClickRemoveProduct = (id: string) => {
        let product = products.find((pr: ProductType) => pr.id === id)
        dispatch(decQuantityProducts(product.id))
        dispatch(totalPrice())
    }
    const onClickAddProduct = (id: string) => {
        let product = products.find((pr: ProductType) => pr.id === id)
        dispatch(incQuantityProducts(product.id))
        dispatch(totalPrice())
    }

    const productsInCart = products.map((pr: ProductType) => {
        return <ProductInBasket
            key={pr.id}
            title={pr.title}
            description={pr.description}
            price={pr.price}
            id={pr.id}
            quantity={pr.quantity}
            onClickRemoveProduct={onClickRemoveProduct}
            onClickAddProduct={onClickAddProduct}
        />
    })

    return (
        <Paper>
            <div className="basket_wrapper">
                <div className="basket_container">
                    <div className="product_block">
                        <div className="product_container">
                            {productsInCart}
                        </div>
                    </div>
                    <div className="orderForm">
                        <FormBasket/>
                    </div>
                </div>
                <Typography>Total : {total ? total + "$" : 0}</Typography>
            </div>
        </Paper>
    )
}