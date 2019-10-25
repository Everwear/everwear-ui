import React, { useState } from 'react'
import { View } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import SkeletonView from '../SkeletonView/SkeletonView'
import $, {
  CONTAINER_WIDTH,
  CONTAINER_HEIGHT,
} from './ItemPhotoStyles'

const ItemPhoto = ({
  style,
  ratio,
  height,
  width,
  ...props
}) => {
  const [ isLoaded, setIsLoaded ] = useState(false)
  const conHeight = height || CONTAINER_HEIGHT

  let imgWidth = width || CONTAINER_WIDTH
  let imgHeight = imgWidth * ratio

  if (imgHeight < conHeight) {
    imgHeight = conHeight
    imgWidth += (conHeight - imgHeight) / ratio
  }

  return (
    <View
      style={[$.container, style, {
        width: width || CONTAINER_WIDTH,
        height: height || CONTAINER_HEIGHT,
      }]}
    >
      <RemoteImage
        {...props}
        resizeMethod="scale"
        style={[$.image, {
          height: imgHeight,
          width: imgWidth,
        }]}
        onLoad={() => {
          setIsLoaded(true)
        }}
      />
      {isLoaded &&
        <View style={$.overlay}/>}
      {isLoaded ||
        <SkeletonView style={$.skeleton}/>}
    </View>
  )
}

export default ItemPhoto
