import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ItemPhoto from '../ItemPhoto/ItemPhoto'
import $ from './CardImageLeftStyles'

const CardImageLeft = ({
  text,
  ratio,
  imageUri,
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
      uri={imageUri}
      style={$.image}
      height={120}
      width={120}
      ratio={ratio}
    />
    <View style={$.content}>
      <Text style={$.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

export default CardImageLeft
