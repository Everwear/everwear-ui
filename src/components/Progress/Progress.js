import React from 'react'
import { View } from 'react-native'
import $ from './ProgressStyles'

const Progress = ({
  style,
  value,
}) => (
  <View style={[$.container, style]}>
    <View
      style={[$.progress, {
        width: value,
      }]}
    />
  </View>
)

export default Progress
