import React from "react"
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <div className="header">
            <Link to="/">back to main</Link>
            <Link to="/basket">Basket</Link>
        </div>
    )
}