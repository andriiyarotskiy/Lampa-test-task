import React from "react";
import {reduxForm, InjectedFormProps, Field, reset} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {sendOrderTC} from "../../bll/basketReducer";
import Button from "@material-ui/core/Button";

export let UserForm = (props: InjectedFormProps<any>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="order_container">

                <Field placeholder="FIRST NAME"
                       name="firstName"
                       component="input"
                       type="text"
                />
                <Field placeholder="LAST NAME"
                       name="lastName"
                       component="input"
                       type="text"
                />
                <Field placeholder="ADDRESS"
                       name="address"
                       component="input"
                       type="text"
                />
                <Field placeholder="PHONE"
                       name="phone"
                       component="input"
                       type="text"
                />
                <Button
                    variant="contained" color="primary"
                    type="submit">Order</Button>
            </div>
        </form>
    )
}
const UserReduxForm = reduxForm<any>({form: 'userForm'})(UserForm)

const FormBasket = () => {
    const products = useSelector<AppRootStateType>(state => state.basketState.products)
    const dispatch = useDispatch()

    const onSubmit = (formData: any) => { // Thunk which sends Data
        dispatch(sendOrderTC(formData, products))
        dispatch(reset("userForm"))
    }

    return (
        <div>
            <UserReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default FormBasket;