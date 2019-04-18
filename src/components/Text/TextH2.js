import React from 'react'
import { Text } from 'react-native'
import $ from './TextH2Styles'

const TextH2 = ({
  style,
  children,
}) => (
  <Text style={[$.text, style]}>
    {children}
  </Text>
)

export default TextH2
