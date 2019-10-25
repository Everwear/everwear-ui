import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import SkeletonView from '../SkeletonView/SkeletonView'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './GalleryStyles'

const Gallery = ({
  ratio,
  style,
  photos,
  onPress,
}) => {
  return (
    <ScrollView
      horizontal={true}
      style={[$.container, style]}
      contentContainerStyle={$.content}
      showsHorizontalScrollIndicator={true}
    >
      {photos.map(({ url }, i) =>
        <TouchableOpacity
          key={url}
          onPress={() => {
            onPress(i)
          }}
        >
          <Photo
            url={url}
            ratio={ratio}
          />
        </TouchableOpacity>)}
    </ScrollView>
  )
}

const Photo = ({
  url,
  ratio,
}) => {
  const [ isLoaded, setIsLoaded ] = useState(false)

  return (
    <View
      style={{
        height: 400,
        width: 400 * (1 / ratio),
      }}
    >
      <RemoteImage
        uri={url}
        style={{
          height: 400,
          width: 400 * (1 / ratio),
        }}
        onLoad={() => {
          console.log('q34234')
          setIsLoaded(true)
        }}
      />
      {isLoaded ||
        <SkeletonView
          style={$.skeleton}
        />}
    </View>
  )
}

export default Gallery
