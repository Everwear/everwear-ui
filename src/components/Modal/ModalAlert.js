import React from 'react'
import ModalAlertBase from './ModalAlertBase'
import ModalBase from './ModalBase'

export default ({
  ...props
}) => (
  <ModalBase {...props}>
    <ModalAlertBase {...props}/>
  </ModalBase>
)
