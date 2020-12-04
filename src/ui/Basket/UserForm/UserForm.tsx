import React from "react";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {useDispatch} from "react-redux";
import {sendOrderTC} from "../../../bll/basketReducer";
import Button from "../../common/Button/Button";
import style from "./UserForm.module.scss";
import {renderField} from "../../common/renderFields/renderFields";
import {validate} from "../../common/validation/validator";


type UserFormType = {
    firstName: string
    lastName: string
    phone: string
    email: string
}

export const UserForm = (props: InjectedFormProps<UserFormType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.container}>
                <span>Contact details</span>
                <div className={style.inputBox}>
                    <p>First Name:</p>
                    <Field
                        name="firstName"
                        component={renderField}
                        type="text"
                    />
                </div>
                <div className={style.inputBox}>
                    <p>Last Name:</p>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                    />
                </div>
                <div className={style.inputBox}>
                    <p>Phone number:</p>
                    <Field
                        name="phone"
                        component="input"
                        type="text"
                    />
                </div>
                <div className={style.inputBox}>
                    <p>Email ID:</p>
                    <Field
                        name="email"
                        component={renderField}
                        type="text"
                    />
                </div>
                <div className={style.btn_form}>
                    <Button
                        variant={"contained"}
                        name={"Send Order"}
                        type="submit"
                        onClick={() => {
                        }}
                    />
                </div>
            </div>
        </form>
    )
}

const UserReduxForm = reduxForm<UserFormType>({form: 'userForm', validate})(UserForm)

const FormBasket = () => {
    const dispatch = useDispatch()

    const onSubmit = (formData: UserFormType) => { // Thunk which sends Data
        dispatch(sendOrderTC(formData))
        dispatch(reset("userForm"))
    }

    return <UserReduxForm onSubmit={onSubmit}/>
}


export default FormBasket;