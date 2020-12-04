import React from "react";
import Button from "../../common/Button/Button";


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
            <Button variant="contained" onClick={decClickHandler} name={"-"}/>
            <span>{quantity}</span>
            <Button variant="contained" onClick={incClickHandler} name={"+"}/>
        </div>
    )
}