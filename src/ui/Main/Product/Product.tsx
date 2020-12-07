import React from "react";
import style from "./Product.module.scss";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from "../../common/Button/Button";


export type ProductType = {
    title: string,
    description: string,
    price: string,
    id: string
    onClickHandler: (id: string) => void // need delete callback from this types
    quantity?: number // notRequiredParameter
    image: string
}
export const Product = ({title, description, price, image, ...props}: ProductType) => {

    const onClickHandler = () => {
        props.onClickHandler(props.id)
    }

    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.head}>
                    <div className={style.likes}>
                        <FavoriteIcon className={style.ion_md_heart}/>
                        <p>212</p>
                    </div>
                    <div className={style.discount}>
                        <button>30% off</button>
                    </div>
                </div>
                <div className={style.product}>
                    <img src={image} alt="se"/>
                </div>
                <div className={style.text}>
                    <div className={style.title}>
                        <h4>{price}$</h4>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={style.footer}>
                    <div className={style.action}>
                        <Button name={"Buy Now"}
                                onClick={onClickHandler}
                                variant={"contained"}
                        />
                    </div>
                    <div className={style.cart}>
                        <Button name={"Add to cart"}
                                onClick={()=>{}}
                                variant={"outlined"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}