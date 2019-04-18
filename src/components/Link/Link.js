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
    hitSlop={{
      top: 10,
      left: 10,
      bottom: 10,
      right: 10,
    }}
  >
    <Text style={$.text}>{children}</Text>
  </TouchableOpacity>
)

export default Link
