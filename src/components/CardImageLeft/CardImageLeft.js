import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ItemPhoto from '../ItemPhoto/ItemPhoto'
import $ from './CardImageLeftStyles'

const CardImageLeft = ({
  text,
  image,
  ratio,
  style,
  testID,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[$.root, style]}
    testID={testID}
    hitSlop={{
      top: 16,
      left: 16,
      bottom: 16,
      right: 16,
    }}
  >
    <ItemPhoto
      style={$.image}
      height={120}
      width={120}
      ratio={ratio}
      source={image}
    />
    <View style={$.content}>
      <Text style={$.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

export default CardImageLeft
