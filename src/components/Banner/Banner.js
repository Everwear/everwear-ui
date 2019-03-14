import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import $ from './BannerStyles'

const Banner = ({
  style,
  onClose,
  children,
}) => (
  <View style={[$.container, style]}>
    <TouchableOpacity style={$.close} onPress={onClose}>
      <Image style={$.cross} source={require('./img/close.png')}/>
    </TouchableOpacity>
    {children}
  </View>
)

export default Banner
