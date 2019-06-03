import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './ItemCardStyles'

const ItemCard = ({
  name,
  storeName,
  storeUrl,
  photo,
  style,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={[$.container, style]}>
    <View>
      <RemoteImage
        style={$.image}
        source={{ uri: photo }}
      />
      <View>
        <Text style={$.title} numberOfLines={1}>{name}</Text>
        <Text style={$.text}>{storeName}</Text>
        <Text style={$.text}>{storeUrl.replace('https://www.', '')}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default ItemCard
