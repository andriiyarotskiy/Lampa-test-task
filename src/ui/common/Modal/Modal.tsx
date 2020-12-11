import React, { ReactNode } from "react";
import style from "./Modal.module.css"

type ModalType = {
    active: boolean
    setActive: (active: boolean) => void
    children?: ReactNode | null
}

const Modal = ({active, setActive, children}: ModalType) => {
    return (
        <div className={active ? `${style.modal} ${style.active}` : style.modal}
             onClick={() => setActive(false)}>
            <div className={active ? `${style.modalContent} ${style.active}` : style.modalContent}
                 onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;