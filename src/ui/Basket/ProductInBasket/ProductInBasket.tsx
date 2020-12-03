import React from "react";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";


export const ProductInBasket = ({id, title, price, description, quantity, ...props}: any) => {


    const decClickHandler = () => {
        props.onClickRemoveProduct(id)
    }
    const incClickHandler = () => {
        props.onClickAddProduct(id)
    }
    return (
        <Paper className="product-item">
            <span>{title}</span>
            <span>{price}</span>
            <span>{description}</span>
            <Button variant="contained" color="primary" onClick={decClickHandler}>-</Button>
            <span>{quantity}</span>
            <Button variant="contained" color="primary" onClick={incClickHandler}>+</Button>
        </Paper>
    )
}