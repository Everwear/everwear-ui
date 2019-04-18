import React from 'react'
import TextBase from './TextBase'
import $ from './TextBaseCenterStyles'

const TextBaseCenter = ({
  style,
  children,
}) => (
  <TextBase style={[$.text, style]}>
    {children}
  </TextBase>
)

export default TextBaseCenter
