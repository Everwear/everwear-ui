import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import $ from './ComboBoxStyles'

const ComboBox = ({
  style,
  onPress,
  children,
}) => (
  <TouchableOpacity onPress={onPress} style={[$.container, style]}>
    <Text style={$.text} numberOfLines={1}>{children}</Text>
    <Image style={$.arrow} source={require('./img/arrow.png')}/>
  </TouchableOpacity>
)

export default ComboBox
