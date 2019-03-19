import React from 'react'
import { View } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import { cn } from '../../common/utils'
import $ from './StoreLogoStyles'

const StoreLogo = ({
  uri,
  size,
}) => (
  <View
    style={cn($, {
      container: true,
      containerBig: size === 'big',
    })}
  >
    <RemoteImage
      style={cn($, {
        logo: true,
        logoBig: size === 'big',
      })}
      resizeMode="contain"
      source={{ uri }}
    />
  </View>
)

export default StoreLogo
