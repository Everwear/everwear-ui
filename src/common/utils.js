import React from 'react'
import { Text, Platform, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export function cn($, keys) {
  const s = []
  for (let k in keys) {
    if (keys[k]) {
      s.push($[k])
    }
  }
  return s
}

export function statusBarHeight() {
  const statusBarHeightIos = DeviceInfo.getModel() === 'iPhone X' ? 44 : 20
  const statusBarHeight = Platform.OS === 'ios' ?
    statusBarHeightIos : StatusBar.currentHeight
  return statusBarHeight
}

export function S({
  style,
  children,
  ...props
}) {
  return (
    <Text {...props} style={[{textDecorationLine: 'line-through'}, style]}>
      {children}
    </Text>
  )
}