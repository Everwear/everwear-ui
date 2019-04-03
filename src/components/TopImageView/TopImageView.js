import React from 'react'
import { View, Text, Image } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './TopImageViewStyles'

export default ({
  text,
  testIDText,
  testIDTitle,
  style,
  title,
  image,
  imageStyle,
}) => {
  let img

  if (image.uri) {
    img = (
      <RemoteImage
        style={[$.image, imageStyle]}
        source={image}
      />
    )
  } else {
    img = (
      <Image
        style={[$.image, imageStyle]}
        source={image}
      />
    )
  }

  return (
    <View style={[$.container, style]}>
      {img}
      {!!title &&
        <Text testID={testIDTitle} style={$.title}>
          {title}
        </Text>}
      {!!text &&
        <Text testID={testIDText} style={$.text}>
          {text}
        </Text>}
    </View>
  )
}
