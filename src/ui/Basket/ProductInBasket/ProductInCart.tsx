import React from "react";
import style from "./ProductInCart.module.scss"


export const ProductInCart = ({id, title, price, description, quantity, ...props}: any) => {

    const decClickHandler = () => {
        props.onClickRemoveProduct(id)
    }
    const incClickHandler = () => {
        props.onClickAddProduct(id)
    }
    const removeSingleProducts = () => {
        props.removeFromCart(id)
    }
    return (
        <div className={style.productItem}>
            <div className={style.removeBtn}
                 onClick={removeSingleProducts}
            ></div>
            <div className={style.item}>
                <img src={`http://localhost:3000${props.image}`} alt="product_img" width="140" height="95"/>
                <span>{title}</span>
            </div>
            <div className={style.wrapperPrices}>
                <div className={style.priceBox}>
                    <span>{price * quantity}$</span>
                </div>
                <div className={style.qtyBox}>
                    <button onClick={decClickHandler}>-</button>
                    <span>{quantity}</span>
                    <button onClick={incClickHandler}>+</button>
                </div>
                <div className={style.unitPrice}>
                    <span>{price}$</span>
                </div>
            </div>
        </div>
    )
}