import React from 'react'
import { Text } from 'react-native'
import $ from './TextBaseStyles'

const TextBase = ({
  style,
  children,
}) => (
  <Text style={[$.text, style]}>
    {children}
  </Text>
)

export default TextBase
