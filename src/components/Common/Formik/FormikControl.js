import  Input  from './Input'
import React from 'react'
import ChakraInput from './ChakraInput'
function FormikControl(props) {
    const {control,...rest} = props
    switch(control){
        case 'input': return <Input {...rest}/>
        case 'chakrainput': return <ChakraInput {...rest}/>
        default: return null
    }
}

export default FormikControl
