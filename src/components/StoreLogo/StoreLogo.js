import React from 'react'
import { View } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './StoreLogoStyles'

const StoreLogo = ({
  uri,
}) => (
  <View style={$.container}>
    <RemoteImage
      style={$.logo}
      resizeMode="contain"
      source={{ uri }}
    />
  </View>
)

export default StoreLogo
