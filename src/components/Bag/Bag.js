import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import $ from './BagStyles'

const IMAGE = require('./img/bag.png')
const IMAGE_ACTIVE = require('./img/bag_active.png')

const Banner = ({
  style,
  count = 0,
  onPress,
}) => (
  <View style={[$.container, style]}>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={$.bag}
        source={count > 0 ? IMAGE_ACTIVE : IMAGE}
      />
    </TouchableOpacity>
    {count > 0 &&
      <View style={$.circle}>
        <Text style={$.count}>{count}</Text>
      </View>}
  </View>
)

export default Banner
