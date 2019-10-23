import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
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
          <RemoteImage
            uri={url}
            style={{
              height: 400,
              width: 400 * (1 / ratio),
            }}
          />
        </TouchableOpacity>)}
    </ScrollView>
  )
}

export default Gallery
