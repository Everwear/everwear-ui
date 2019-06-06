import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import $ from './ModalAlertBaseStyles'

export default ({
  text,
  caption,
  onClose,
  testIDText,
}) => (
  <View>
    <View style={$.content}>
      {text &&
        <Text testID={testIDText} style={$.text}>
          {text}
        </Text>}
      {caption &&
        <Text style={$.caption}>
          {caption}
        </Text>}
    </View>
    <View style={$.buttons}>
      <TouchableHighlight
        style={$.button}
        underlayColor="#dce0e3"
        onPress={() => {
          requestAnimationFrame(() => {
            onClose()
          })
        }}
      >
        <Text style={$.buttonText}>
          Ok
        </Text>
      </TouchableHighlight>
    </View>
  </View>
)
