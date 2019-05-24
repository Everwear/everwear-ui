import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import $ from './ItemCardStyles'

const ItemCard = ({
  style,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={[$.container, style]}>
    <View>
      <Image
        style={$.image}
        source={require('./img/image.jpg')}
      />
      <View>
        <Text style={$.title} numberOfLines={1}>ASOS DESIGN cropped purple awesome stop start</Text>
        <Text style={$.text}>Blazer</Text>
        <Text style={$.text}>asos.com</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default ItemCard
