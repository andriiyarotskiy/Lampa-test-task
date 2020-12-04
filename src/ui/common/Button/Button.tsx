import React from 'react';
import style from "./Button.module.scss"

type ButtonType = {
    variant: "contained" | "outlined"
    name: string
    onClick: ()=> void
}

const Button = ({variant, name, onClick}: ButtonType) => {
    return (
        <button onClick={onClick}
        className={variant === "contained"
        ? style.contained
        : style.outlined}
        >{name}</button>
    );
};

export default Button;