import React from 'react'
import ModalActionsBase from './ModalActionsBase'
import ModalBase from './ModalBase'

export default ({
  ...props
}) => (
  <ModalBase {...props}>
    <ModalActionsBase {...props}/>
  </ModalBase>
)
