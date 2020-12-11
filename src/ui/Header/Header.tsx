import React, {useState} from "react"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import style from "./Header.module.scss"
import logo from "../../assets/images/logo_watch.png"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Modal from "../common/Modal/Modal";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import {loginTC, logoutTC} from "../../bll/authReducer";
import FacebookLogin from 'react-facebook-login';
import Button from "../common/Button/Button";

const client_google_id = "345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"
const client_facebook_id = "399813427801800"

export const Header = () => {


    const [modalActive, setModalActive] = useState(false)
    const totalPrice = useSelector<AppRootStateType, number | null>(state => state.basketState.total)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const user = useSelector<AppRootStateType, any>(state => state.auth.user)
    const dispatch = useDispatch()
    //google Auth
    const responseGoogle = (response: any): any => {
        if (response) {
            const {imageUrl, name} = response.profileObj
            dispatch(loginTC({imageUrl, name}))
            setModalActive(false)
        }
    }

    const logout = () => {
        dispatch(logoutTC())
    }

    //FACEBOOK
    const responseFacebook = (response: any) => {
        if (response) {
            const name = response.name
            const imageUrl = response.picture.data.url
            dispatch(loginTC({name, imageUrl}))
            setModalActive(false)
        }
    }


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
                    ? <div>
                        <GoogleLogout
                            clientId={"345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"}
                            // buttonText={'Logout'}
                            onLogoutSuccess={logout}
                            render={renderProps =>
                                <Button variant={"contained"} onClick={renderProps.onClick} name={"Log out"}/>
                                /*<button onClick={renderProps.onClick} className="btn btn-dark">Sign in</button>*/
                            }
                        />

                        <span>{user.name}</span>
                        <img style={{borderRadius: "15px"}} src={user.imageUrl} alt="" width="30" height="30"/>
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
                        <div className={style.Google_btn}>
                            <GoogleLogin clientId={client_google_id}
                                /*       buttonText="Login with Google"*/
                                         onSuccess={responseGoogle}
                                         onFailure={responseGoogle}
                                         cookiePolicy={'single_host_origin'}
                                         responseType='code,token'
                                         isSignedIn={true}
                            />
                        </div>
                        <div className={style.FB_btn}>
                            <FacebookLogin
                                appId={client_facebook_id}
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                icon="fa-facebook"
                                textButton={"Sign in with Facebook"}
                                responseType={'Object'}
                            />
                        </div>
                    </div>
                    }
                </div>
            </Modal>
        </div>
    )
}