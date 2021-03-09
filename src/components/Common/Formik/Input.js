import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextErro from './TextErro'
function Input(props) {
    const {label, name, ...rest} = props
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextErro}/>
        </>
    )
}

export default Input
