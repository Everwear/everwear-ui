import React from 'react'
import { View } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './StoreLogoStyles'

const StoreLogo = ({
  uri,
  style,
}) => (
  <View style={[$.container, style]}>
    <RemoteImage
      style={$.logo}
      resizeMode="contain"
      source={{ uri }}
    />
  </View>
)

export default StoreLogo
