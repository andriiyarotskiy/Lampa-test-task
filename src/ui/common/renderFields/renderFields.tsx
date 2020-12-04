import style from "./renderFields.module.scss"
import warningIcon from "../../../assets/images/warning_icon.svg";
import React from "react";

export const renderField = ({input, type, meta: {touched, error}}: any) => (
    <div className={style.fieldContainer}>
            <input {...input} type={type}/>
            {touched &&
            ((error && <div className={style.warningMessage}>
                <img src={warningIcon} alt="warning"/>
                <span>{error}</span>
            </div>))}
    </div>
)