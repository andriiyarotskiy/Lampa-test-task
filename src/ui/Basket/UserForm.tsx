import React from "react";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {useDispatch} from "react-redux";
import {sendOrderTC} from "../../bll/basketReducer";
import Button from "@material-ui/core/Button";


type UserFormType = {
    firstName: string
    lastName: string
    address: string
    phone: string
}

export const UserForm = (props: InjectedFormProps<UserFormType>) => {

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
const UserReduxForm = reduxForm<UserFormType>({form: 'userForm'})(UserForm)

const FormBasket = () => {
    const dispatch = useDispatch()

    const onSubmit = (formData: UserFormType) => { // Thunk which sends Data
        dispatch(sendOrderTC(formData))
        dispatch(reset("userForm"))
    }

    return (
        <div>
            <UserReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default FormBasket;