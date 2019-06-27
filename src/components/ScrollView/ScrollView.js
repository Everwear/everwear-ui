import React, { useState } from 'react'
import { ScrollView as RNScrollView, View, Image } from 'react-native'
import $ from './ScrollViewStyles'

const ScrollView = ({
  style,
  children,
  ...props,
}) => {
  const [ showTopGradient, setTopGradient ] = useState(false)
  const [ showBottomGradient, setBottomGradient ] = useState(false)

  return (
    <View style={[$.container, style]}>
      <RNScrollView
        {...props}
        scrollEventThrottle={20}
        onScroll={(e) => {
          const {
            contentSize,
            contentOffset,
            layoutMeasurement,
          } = e.nativeEvent

          if (contentSize.height > layoutMeasurement.height) {
            if (contentOffset.y > 10 && !showTopGradient) {
              setTopGradient(true)
            } else if (contentOffset.y <= 10 && showTopGradient) {
              setTopGradient(false)
            }
            if (contentOffset.y + layoutMeasurement.height < contentSize.height - 10 && !showBottomGradient) {
              setBottomGradient(true)
            } else if (contentOffset.y + layoutMeasurement.height >= contentSize.height - 10 && showBottomGradient) {
              setBottomGradient(false)
            }
          }
        }}
        onContentSizeChange={(width, height) => {
          if (height > 320 && !showBottomGradient) {
            setBottomGradient(true)
          }
        }}
      >
        {children}
      </RNScrollView>
      {showTopGradient &&
        <Image style={$.gradientTop} source={require('./img/top_gradient.png')} pointerEvents="none"/>}
      {showBottomGradient &&
        <Image style={$.gradientBottom} source={require('./img/bottom_gradient.png')} pointerEvents="none"/>}
    </View>
  )
}

export default ScrollView
