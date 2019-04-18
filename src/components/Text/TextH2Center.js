import React from 'react'
import TextH2 from './TextH2'
import $ from './TextH2CenterStyles'

const TextH2Center = ({
  style,
  children,
}) => (
  <TextH2 style={[$.text, style]}>
    {children}
  </TextH2>
)

export default TextH2Center
