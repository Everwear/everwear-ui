import React from 'react'
import { Text } from 'react-native'
import $ from './TextH1Styles'

const TextH1 = ({
  style,
  children,
}) => (
  <Text style={[$.text, style]}>
    {children}
  </Text>
)

export default TextH1
