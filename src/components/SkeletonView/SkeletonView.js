import React from 'react'
import { Animated } from 'react-native'
import $ from './SkeletonViewStyles'

const DURATION = 400
const VALUE_START = 0.2
const VALUE_END = 1

const SkeletonView = ({
  style,
}) => {
  const animation = new Animated.Value(VALUE_START)

  function start() {
    Animated.sequence([
      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: VALUE_END,
        duration: DURATION,
      }),
      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: VALUE_START,
        duration: DURATION,
      }),
    ]).start((e) => {
      if (e.finished) {
        start()
      }
    })
  }

  start()

  return (
    <Animated.View
      style={[$.root, style, {
        opacity: animation,
      }]}
    />
  )
}

export default SkeletonView
