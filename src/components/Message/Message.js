import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CLR_ORANGE } from '../../common/vars'
import $ from './MessageStyles'

export default ({
  style,
  color = CLR_ORANGE,
  onPress,
  children,
  testID,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[$.container, {
          backgroundColor: color,
        }, style]}
      >
        <Text style={$.text} testID={testID}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={[$.container, {
        backgroundColor: color,
      }, style]}
    >
      <Text style={$.text} testID={testID}>
        {children}
      </Text>
    </View>
  )
}
