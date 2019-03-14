import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import $ from './SpinnerViewStyles'

const SpinnerView = () => (
  <View style={$.container}>
    <ActivityIndicator
      size="large"
    />
  </View>
)

export default SpinnerView
