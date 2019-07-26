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
  const statusBarHeightIos = DeviceInfo.getModel().startsWith('iPhone X') ? 44 : 20
  const statusBarHeight = Platform.OS === 'ios' ?
    statusBarHeightIos : 0 // StatusBar.currentHeight
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

export function U({
  style,
  children,
  ...props
}) {
  return (
    <Text {...props} style={[{textDecorationLine: 'underline'}, style]}>
      {children}
    </Text>
  )
}

export function B({
  style,
  children,
  ...props
}) {
  return (
    <Text {...props} style={[{fontFamily: 'WorkSans-SemiBold'}, style]}>
      {children}
    </Text>
  )
}

export function dollarify(amount) {
  return `${amount < 0 ? '-' : '+'}$${Math.abs(amount)}`
}

export function _00(value) {
  return value % 1 > 0 ? value.toFixed(2) : value
}
