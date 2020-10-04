import React from "react"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";


export const Header = () => {
    const totalPrice = useSelector<AppRootStateType, number | null>(state => state.basketState.total)
    return (
        <div className="header">
            <Link to="/">back to main</Link>
            <Link to="/basket">Basket</Link>
            {totalPrice && <span>total : {totalPrice}$</span>}
        </div>
    )
}