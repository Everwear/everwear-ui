import React from 'react'
import { View, Text, Image } from 'react-native'
import $ from './EmptyViewStyles'

export default ({
  text,
  image,
  style,
  children,
}) => {
  return (
    <View style={[$.container, style]}>
      <Image
        style={$.image}
        source={image}
      />
      <Text style={$.text}>
        {text}
      </Text>
      {children}
    </View>
  )
}
