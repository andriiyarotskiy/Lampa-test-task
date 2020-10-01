import React from "react"


export const Basket = () => {
    return (
        <>
            <div className="basket_wrapper">
                <div className="basket_container">
                    <div className="product_block">
                        <div className="product_container">
                            <div className="product-item">
                                <span>title</span>
                                <span>price</span>
                                <span>description</span>
                                <button>dec</button>
                                <span>1</span>
                                <button>inc</button>
                            </div>
                        </div>
                    </div>
                    <div className="orderForm">
                        <div className="order_container">
                            <input type="text" placeholder="name"/>
                            <input type="text" placeholder="surname"/>
                            <input type="text" placeholder="address"/>
                            <input type="text" placeholder="phone"/>
                            <input type="submit" value="ORDER"/>
                        </div>
                    </div>
                </div>
                <span>Total : 99999$</span>
            </div>
        </>
    )
}