import React from 'react'
import ModalBase from './ModalBase'
import ModalTextFieldBase from './ModalTextFieldBase'

const ModalTextField = (props) => (
  <ModalBase onRequestClose={props.onCancel} {...props}>
    <ModalTextFieldBase {...props}/>
  </ModalBase>
)

export default ModalTextField
