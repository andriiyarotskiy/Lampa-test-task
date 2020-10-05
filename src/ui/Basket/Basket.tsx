import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {ProductInBasket} from "./ProductInBasket";
import {ProductType} from "../Main/Product/Product";
import {Actions} from "../../bll/actions/actions";
import FormBasket from "./UserForm";
import {Paper, Typography} from "@material-ui/core";


export const Basket = () => {
    const {products, total} = useSelector<AppRootStateType, any>(state => state.basketState)

    const dispatch = useDispatch()


    const onClickRemoveProduct = (id: string) => {
        let product = products.find((pr: ProductType) => pr.id === id)
        dispatch(Actions.downQuantityInBasket(product.id))
        dispatch(Actions.totalPrice())
    }
    const onClickAddProduct = (id: string) => {
        let product = products.find((pr: ProductType) => pr.id === id)
        dispatch(Actions.upQuantityInBasket(product.id))
        dispatch(Actions.totalPrice())
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
                <Typography>Total : {total && total + "$"}</Typography>
            </div>
        </Paper>
    )
}