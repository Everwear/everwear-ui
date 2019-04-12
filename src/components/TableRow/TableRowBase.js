import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableHighlight, Animated } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import { cn } from '../../common/utils'
import $ from './TableRowBaseStyles'

const TableRowBase = ({
  last,
  first,
  style,
  image,
  imageStyle = {},
  imageView,
  imageViewStyle = {},
  imageIsLoading,
  noTopSep,
  noBottomSep,
  fullWidthSep,
  onPress,
  children,
  testID,
}) => (
  <TouchableHighlight
    testID={testID}
    style={[cn($, {
      'container': true,
      'containerFirst': first,
      'containerLast': last,
    }), style]}
    underlayColor="#dce0e3"
    onPress={onPress}
  >
    <View
      style={cn($, {
        'content': true,
        'contentTopSep': fullWidthSep && !first && !(noTopSep === true),
        'contentBottomSep': fullWidthSep && !last && !(noBottomSep === true),
      })}
    >
      {imageIsLoading &&
        <Fade style={[$.image, imageStyle]}/>}
      {imageIsLoading || image && !image.uri &&
        <Image
          style={[$.image, imageStyle]}
          source={image}
        />}
      {imageIsLoading || image && !!image.uri &&
        <RemoteImage
          style={[$.image, imageStyle]}
          source={image}
        />}
      {imageView &&
        <View style={[$.imageView, imageViewStyle]}>
          {imageView}
        </View>}
      <View
        style={cn($, {
          'wrap': true,
          'wrapTopSep': !fullWidthSep && !first && !(noTopSep === true),
          'wrapBottomSep': !fullWidthSep && !last && !(noBottomSep === true),
        })}
      >
        {children}
      </View>
    </View>
  </TouchableHighlight>
)

TableRowBase.propTypes = {
  last: PropTypes.bool,
  first: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  image: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  imageStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  imageView: PropTypes.object,
  imageViewStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  onPress: PropTypes.func,
  noTopSep: PropTypes.bool,
  noBottomSep: PropTypes.bool,
  testID: PropTypes.string,
}

export default TableRowBase

const DURATION = 500
const VALUE_START = 0.5
const VALUE_END = 1

const Fade = ({
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
      style={[style, {
        opacity: animation,
      }]}
    />
  )
}
