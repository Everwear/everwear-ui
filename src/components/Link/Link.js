import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import $ from './LinkStyles'

const Link = ({
  style,
  onPress,
  children,
}) => (
  <TouchableOpacity
    style={[$.container, style]}
    onPress={onPress}
  >
    <Text style={$.text}>{children}</Text>
  </TouchableOpacity>
)

export default Link
