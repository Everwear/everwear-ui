import React from 'react'
import TextH1 from './TextH1'
import $ from './TextH1CenterStyles'

const TextH1Center = ({
  style,
  children,
}) => (
  <TextH1 style={[$.text, style]}>
    {children}
  </TextH1>
)

export default TextH1Center
