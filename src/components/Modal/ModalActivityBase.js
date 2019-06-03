import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import $ from './ModalActivityBaseStyles'

export default ({
  text,
  caption,
}) => (
  <View style={$.content}>
    {text &&
      <Text style={$.text}>
        {text}
      </Text>}
    {caption &&
      <Text style={$.caption}>
        {caption}
      </Text>}
    <ActivityIndicator
      style={$.spinner}
      size="large"
    />
  </View>
)
