import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {ProductType} from "../Main/Product/Product";
import FormBasket from "./UserForm/UserForm";
import {decQuantityProducts, incQuantityProducts, removeSingleProducts, totalPrice} from "../../bll/actions/actions";
import {ProductInCart} from "./ProductInBasket/ProductInCart";
import style from "./Basket.module.scss"


export const Basket = () => {
    const {products, total} = useSelector<AppRootStateType, any>(state => state.basketState)
    // const singleTotalPrice = useSelector<any>(singleTotal)

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

    const removeFromCart = (id: string) => {
       dispatch(removeSingleProducts(id))
    }

    const productsInCart = products.map((pr: ProductType) => {
        return <ProductInCart
            key={pr.id}
            title={pr.title}
            description={pr.description}
            price={pr.price}
            id={pr.id}
            quantity={pr.quantity}
            onClickRemoveProduct={onClickRemoveProduct}
            onClickAddProduct={onClickAddProduct}
            removeFromCart={removeFromCart}
            // singleTotalPrice={singleTotalPrice}
        />
    })

    // Delete Single Products from Cart


    return (
        <div className={style.basket}>
            <div className={style.products_list}>
                <div className={style.cartTitles}>
                    <span className={style.productTitle}>Product</span>
                    <div>
                        <span>Price</span>
                        <span>QTY</span>
                        <span>Unit Price</span>
                    </div>
                </div>
                {(productsInCart.length > 0)
                    ? productsInCart
                    : <span>Clear</span>}
            </div>
            <div className={style.order_form}>
                <FormBasket/>
            </div>

        </div>
    )
}