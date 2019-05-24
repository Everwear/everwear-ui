import React from 'react'
import { TouchableOpacity, Image, ScrollView } from 'react-native'
import $ from './GalleryStyles'

const Gallery = ({
  style,
}) => (
  <ScrollView
    horizontal={true}
    style={[$.container, style]}
    showsHorizontalScrollIndicator={true}
  >
    <TouchableOpacity onPress={() => {}}>
      <Image
        style={$.image}
        source={require('./img/image.jpg')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Image
        style={$.image}
        source={require('./img/image.jpg')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Image
        style={$.image}
        source={require('./img/image.jpg')}
      />
    </TouchableOpacity>
  </ScrollView>
)

export default Gallery
