import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import $ from './PromoCardStyles'

const PromoCard = ({
  style,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={[$.container, style]}>
    <View>
      <Image
        style={$.image}
        source={require('./img/image.jpg')}
      />
      <Text style={$.title}>Super bags</Text>
    </View>
  </TouchableOpacity>
)

export default PromoCard
