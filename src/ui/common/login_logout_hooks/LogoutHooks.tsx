import React from 'react';
import {useGoogleLogout} from "react-google-login";
import google_icon from "../../../assets/images/google_icon_131222.svg";
import {clientId} from "./LoginHooks";


type LogoutHooksType = {
    onLogoutSuccess: () => void
    onFailure: () => void
}

const LogoutHooks = ({onLogoutSuccess, onFailure}: LogoutHooksType) => {

    const {signOut} = useGoogleLogout({
        onLogoutSuccess,
        onFailure,
        clientId,
    })

    return <button onClick={signOut}
                   className="button">
        <img src={google_icon} width="20" height="20" alt='#'></img>
        <span className="buttonText">Sign out</span>
    </button>
};

export default LogoutHooks;