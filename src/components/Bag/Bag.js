import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import $ from './BagStyles'

const IMAGE = require('./img/bag.png')
const IMAGE_ACTIVE = require('./img/bag_active.png')

const Bag = ({
  style,
  count = 0,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[$.container, style]}
    hitSlop={{
      top: 16,
      left: 16,
      bottom: 16,
      right: 16,
    }}
  >
    <Image
      style={$.bag}
      source={count > 0 ? IMAGE_ACTIVE : IMAGE}
    />
    {count > 0 &&
      <View style={$.circle}>
        <Text style={$.count}>{count}</Text>
      </View>}
  </TouchableOpacity>
)

export default Bag
