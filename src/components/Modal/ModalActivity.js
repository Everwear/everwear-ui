import React from 'react'
import ModalActivityBase from './ModalActivityBase'
import ModalBase from './ModalBase'

export default ({
  ...props
}) => (
  <ModalBase {...props}>
    <ModalActivityBase {...props}/>
  </ModalBase>
)
