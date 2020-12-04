import React, {useEffect} from "react"
import {Product, ProductType} from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {fetchProductsTC} from "../../bll/mainReducer";
import {addToBasket, totalPrice} from "../../bll/actions/actions";
import style from "./Main.module.scss"


export const Main = () => {

    const data = useSelector<AppRootStateType, any>(state => state.mainState)

    const dispatch = useDispatch()

    useEffect(() => {
        const thunk = fetchProductsTC();
        dispatch(thunk)
    }, [dispatch])

    const onClickHandler = (id: string) => {
        let product = data.find((pr: ProductType) => pr.id === id)
        dispatch(addToBasket({...product, quantity: 1}))
        dispatch(totalPrice())
    }

    return (
        <div className={style.container}>
            {data.map((el: ProductType) => {
                return <div className={style.itemBox}
                    key={el.id}>
                    <Product
                    title={el.title}
                    description={el.description}
                    price={el.price}
                    id={el.id}
                    onClickHandler={onClickHandler}
                    image={el.image}/>
                </div>
            })}
        </div>
    )
}