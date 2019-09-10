import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import $ from './ActivityViewStyles'

const ActivityView = ({
  style,
}) => (
  <View style={[$.root, style]}>
    <ActivityIndicator size="large" color="#fff"/>
  </View>
)

export default ActivityView
