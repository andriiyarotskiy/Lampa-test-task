import React from "react"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import style from "./Header.module.scss"
import logo from "../../assets/images/logo_watch.png"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


export const Header = () => {

    const totalPrice = useSelector<AppRootStateType, number | null>(state => state.basketState.total)
    return (
        <div className={style.header}>
            <div className={style.header_login}>
                <div className={style.logo}>
                    <div className={style.logo_img}>
                        <img src={logo} alt=""/>
                    </div>
                    <Link to="/">
                        <span>WatchZone</span>
                    </Link>
                </div>
                <a className={style.signIn}>SIGN IN</a>
            </div>
            <div className={style.header_navbar__wrap}>
                <div className={style.container_navbar}>
                    <div className={style.header_title}>
                        <span>Smart Watch Brands</span>
                        <span className={style.text_sale}>Sale</span>
                        <span className={style.icon_home}>
                             <Link to="/">
                            <HomeRoundedIcon fontSize={"large"}/>
                             </Link>
                        </span>
                    </div>

                    <div className={style.header_cart}>
                        {totalPrice && <span className={style.total}>{totalPrice}$</span>}
                        <Link to="/basket">
                            <ShoppingCartIcon  fontSize={"large"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}