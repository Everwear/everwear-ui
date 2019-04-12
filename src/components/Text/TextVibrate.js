import React from 'react'
import { Text } from 'react-native'
import $ from './TextVibrateStyles'

const TextVibrate = ({
  style,
  children,
}) => (
  <Text style={[$.text, style]}>
    {children}
  </Text>
)

export default TextVibrate
