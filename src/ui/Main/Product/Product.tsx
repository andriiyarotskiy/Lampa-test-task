import React from "react"

export type ProductType = {
    title: string,
    description: string,
    price: string,
    id: string
    onClickHandler: (id: string) => void // need delete callback from this types
    quantity?: number // notRequiredParameter
}

export const Product = ({title, description, price, ...props}: ProductType) => {

    const onClickHandler = () => {
        props.onClickHandler(props.id)
    }

    return (
        <div className="product">
            <div className="product-container">
                <span>{title}</span>
                <span>{price}</span>
                <span>{description}</span>
                <button onClick={onClickHandler}>add to basket</button>
            </div>
        </div>
    )
}