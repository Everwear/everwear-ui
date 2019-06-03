import React from 'react'
import { ScrollView } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './GalleryStyles'

const Gallery = ({
  photos,
  style,
}) => (
  <ScrollView
    horizontal={true}
    style={[$.container, style]}
    showsHorizontalScrollIndicator={true}
  >
    {photos.map(({ url }) =>
      <RemoteImage
        key={url}
        style={$.image}
        source={{ uri: url }}
      />)}
  </ScrollView>
)

export default Gallery
