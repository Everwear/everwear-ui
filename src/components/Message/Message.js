import React from 'react'
import { View, Text } from 'react-native'
import { CLR_ORANGE } from '../../common/vars'
import $ from './MessageStyles'

export default ({
  style,
  color = CLR_ORANGE,
  children,
  testID,
}) => (
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
