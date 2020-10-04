import React from "react";



export const ProductInBasket = ({id, title, price, description, quantity, ...props}: any) => {


    const decClickHandler = () => {
        props.onClickRemoveProduct(id)
    }
    const incClickHandler = () => {
        props.onClickAddProduct(id)
    }
    return (
        <div className="product-item">
            <span>{title}</span>
            <span>{price}</span>
            <span>{description}</span>
            <button onClick={decClickHandler}>dec</button>
            <span>{quantity}</span>
            <button onClick={incClickHandler}>inc</button>
        </div>
    )
}