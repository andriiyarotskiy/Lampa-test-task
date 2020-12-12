import React from 'react';
import {useGoogleLogin} from "react-google-login";
import google_icon from "../../../assets/images/google_icon_131222.svg"


export const clientId = "345999559557-l0djs7ot59j8914n1bp4mvkn08odsp4n.apps.googleusercontent.com"


type LoginHooksType = {
    onSuccess: (res: any) => void
    onFailure: (res: any) => void
}
const LoginHooks = ({onSuccess, onFailure}: LoginHooksType) => {

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        accessType: 'offline',
        isSignedIn: true,
        uxMode: ""
    })

    return (
        <button onClick={signIn}>
            <img src={google_icon} width="20" height="20" alt='#'/>
            <span className="buttonText">Sign in with Google</span>
        </button>
    )
};

export default LoginHooks;