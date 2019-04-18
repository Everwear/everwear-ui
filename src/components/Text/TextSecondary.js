import React from 'react'
import { Text } from 'react-native'
import $ from './TextSecondaryStyles'

const TextSecondary = ({
  style,
  children,
}) => (
  <Text style={[$.text, style]}>
    {children}
  </Text>
)

export default TextSecondary
