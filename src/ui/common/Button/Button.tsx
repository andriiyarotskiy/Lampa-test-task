import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from "./Button.module.scss"

type ButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {
    variant: "contained" | "outlined"
    name: string
    onClick: () => void
}

const Button = ({variant, name, onClick, ...props}: ButtonType) => {
    return (
        <button onClick={onClick}
                className={variant === "contained"
                    ? style.contained
                    : style.outlined}
                {...props}
        >{name}</button>
    );
};

export default Button;