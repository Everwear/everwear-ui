import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import $ from './ModalConfirmBaseStyles'

export default ({
  text,
  caption,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  testIDText,
  testIDCancel,
  testIDConfirm,
}) => (
  <View>
    <View style={$.content}>
      <Text testID={testIDText} style={$.text}>
        {text}
      </Text>
      {caption &&
        <Text style={$.caption}>
          {caption}
        </Text>}
    </View>
    <View style={$.buttons}>
      <TouchableHighlight
        style={[$.button, $.buttonSep]}
        underlayColor="#dce0e3"
        testID={testIDCancel}
        onPress={() => {
          requestAnimationFrame(() => {
            onCancel()
          })
        }}
      >
        <Text style={$.buttonText}>
          {cancelText}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={$.button}
        testID={testIDConfirm}
        underlayColor="#dce0e3"
        onPress={() => {
          requestAnimationFrame(() => {
            onConfirm()
          })
        }}
      >
        <Text style={$.buttonTextBold}>
          {confirmText}
        </Text>
      </TouchableHighlight>
    </View>
  </View>
)
