import React from 'react'
import ModalConfirmBase from './ModalConfirmBase'
import ModalBase from './ModalBase'

export default ({
  ...props
}) => (
  <ModalBase {...props}>
    <ModalConfirmBase {...props}/>
  </ModalBase>
)
