import React from 'react'
import { View, ActivityIndicator, Modal } from 'react-native'
import $ from './ActivityModalStyles'

const ActivityModalStyles = ({
  animationType = 'fade',
  ...props
}) => (
  <Modal
    transparent={true}
    animationType={animationType}
    {...props}
  >
    <View style={$.root}>
      <View style={$.modal}>
        <ActivityIndicator size="large" color="#fff"/>
      </View>
    </View>
  </Modal>
)

export default ActivityModalStyles
