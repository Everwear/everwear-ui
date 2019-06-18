import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './ItemCardStyles'

const ItemCard = ({
  name,
  storeName,
  category,
  photo,
  style,
  onPress,
  children,
}) => (
  <TouchableOpacity onPress={onPress} style={[$.container, style]}>
    <View>
      <RemoteImage
        style={$.image}
        source={{ uri: photo }}
      />
      <View>
        <Text style={$.title} numberOfLines={1}>{name}</Text>
        <Text style={$.text}>{category}</Text>
        <Text style={$.text}>Seller: {storeName}</Text>
      </View>
    </View>
    {children}
  </TouchableOpacity>
)

export default ItemCard