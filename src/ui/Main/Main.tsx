import React from "react"
import {Product} from "./Product/Product";

export const Main = () => {
    return (
        <div className="main">
            <div className="main_container">
            <Product/>
            <Product/>
            <Product/>
            </div>
        </div>
    )
}