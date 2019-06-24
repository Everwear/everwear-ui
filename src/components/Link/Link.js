import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import $ from './LinkStyles'

const Link = ({
  style,
  onPress,
  color = '#4c73ff',
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
    <Text
      style={[$.text, {
        color,
      }]}
    >
      {children}
    </Text>
  </TouchableOpacity>
)

export default Link
