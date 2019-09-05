import React from 'react'
import { View, Modal, KeyboardAvoidingView, Platform } from 'react-native'
import $ from './ModalBaseStyles'

export default ({
  onClose,
  animationType = 'fade',
  children,
  ...props
}) => (
  <Modal
    transparent={true}
    animationType={animationType}
    onRequestClose={onClose || (() => {})}
    {...props}
  >
    <KeyboardAvoidingView
      behavior="padding"
      style={$.container}
      enabled={Platform.OS === 'ios'}
    >
      <View style={$.modal}>
        {children}
      </View>
    </KeyboardAvoidingView>
  </Modal>
)
