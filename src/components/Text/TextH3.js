import React from 'react'
import { Text } from 'react-native'
import $ from './TextH3Styles'

const TextH3 = ({
  style,
  children,
}) => (
  <Text style={[$.text, style]}>
    {children}
  </Text>
)

export default TextH3
