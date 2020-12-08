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
    // Delete Single Products from Cart
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
            image={pr.image}
            quantity={pr.quantity}
            onClickRemoveProduct={onClickRemoveProduct}
            onClickAddProduct={onClickAddProduct}
            removeFromCart={removeFromCart}
        />
    })


    return (
        <div className={style.basket}>
            <div className={style.products_list}>
                {(productsInCart.length > 0) &&
                <div className={style.cartTitles}>
                    <span className={style.productTitle}>Product</span>
                    <div className={style.priceText}>
                        <span>Price</span>
                        <span className={style.qtyText}>QTY</span>
                        <span>Unit Price</span>
                    </div>
                </div>}
                {productsInCart}
                {(productsInCart.length > 0)
                && <div className={style.totalContainer}>
                    <span>Total</span>
                    <span>${total}</span></div>}
            </div>
            <div className={style.wrapForm}>
                <div className={style.order_form}>
                    <FormBasket/>
                </div>
            </div>
        </div>
    )
}