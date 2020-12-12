import React, {useState} from "react"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import style from "./Header.module.scss"
import logo from "../../assets/images/logo_watch.png"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Modal from "../common/Modal/Modal";
import {loginTC, logoutTC} from "../../bll/authReducer";
import LoginHooks from "../common/login_logout_hooks/LoginHooks";
import LogoutHooks from "../common/login_logout_hooks/LogoutHooks";
import {saveState} from "../../utils/saveToLocalStorage";

// const client_facebook_id = "399813427801800"

export const Header = () => {


    const [modalActive, setModalActive] = useState(false)
    const totalPrice = useSelector<AppRootStateType, number | null>(state => state.basketState.total)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const user = useSelector<AppRootStateType, any>(state => state.auth.user)
    const dispatch = useDispatch()
    //google  Login

    const onSuccess = (response: any): any => {
        if (response) {
            const {imageUrl, name} = response.profileObj
            dispatch(loginTC({imageUrl, name}))
            setModalActive(false)
            // save user to localStorage
            saveState('user', {imageUrl, name})
        }
    }
    const onFailureLogin = (res: any) => {
        console.log('[login Failed] res:', res)
    }

    //Google Logout
    const onLogoutSuccess = () => {
        dispatch(logoutTC())
        localStorage.removeItem('user')
    }
    const onFailure = () => {
        console.log('Handle Failure cases')
    }

    //FACEBOOK
    // const responseFacebook = (response: any) => {
    //     if (response) {
    //         const name = response.name
    //         const imageUrl = response.picture.data.url
    //         dispatch(loginTC({name, imageUrl}))
    //         setModalActive(false)
    //     }
    // }
    //

    return (
        <div className={style.header}>
            <div className={style.header_login}>
                <div className={style.logoContainer}>
                    <div className={style.logo_img}>
                        <img src={logo} alt=""/>
                    </div>
                    <Link to="/">
                        <span>WatchZone</span>
                    </Link>
                </div>
                {isAuth
                    ? <div className={style.loginBlock}>
                        <div className={style.userInfo}>
                            <span>{user.name}</span>
                            {user.imageUrl && <img style={{borderRadius: "15px"}} src={user.imageUrl} alt="img"/>}
                        </div>
                        <div className={style.google_btn}>
                            <LogoutHooks onFailure={onFailure} onLogoutSuccess={onLogoutSuccess}/>
                        </div>
                    </div>
                    : <Link to={""} className={style.signIn}
                            onClick={() => setModalActive(true)}
                    >SIGN IN</Link>}
            </div>
            <div className={style.header_navbar__wrap}>
                <div className={style.container_navbar}>
                    <div className={style.header_titles}>
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
                            <ShoppingCartIcon fontSize={"large"}/>
                        </Link>
                    </div>
                </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <div>
                    {!isAuth && <div>
                        <div className={style.loginBlock}>
                            <LoginHooks onSuccess={onSuccess} onFailure={onFailureLogin}/>
                        </div>
                    </div>
                    }
                </div>
            </Modal>
        </div>
    )
}