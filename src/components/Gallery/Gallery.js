import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, Modal } from 'react-native'
import ImageGallery from 'react-native-image-gallery'
import RemoteImage from '../RemoteImage/RemoteImage'
import Link from '../Link/Link'
import $ from './GalleryStyles'

const Gallery = ({
  photos,
  style,
}) => {
  const [ isFullscreen, setFullscreen ] = useState(false)
  const [ photoIndex, setPhotoIndex ] = useState(0)

  return (
    <>
      <Modal
        visible={isFullscreen}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setFullscreen(false)
        }}
      >
        <Link
          color="#fff"
          style={$.close}
          onPress={() => {
            setFullscreen(false)
          }}
        >
          Close
        </Link>
        <ImageGallery
          style={$.gallery}
          initialPage={photoIndex}
          images={photos.map(({ url }) => ({
            source: {
              uri: url,
            },
          }))}
        />
      </Modal>
      <ScrollView
        horizontal={true}
        style={[$.container, style]}
        showsHorizontalScrollIndicator={true}
      >
        {photos.map(({ url }, i) =>
          <TouchableOpacity
            key={url}
            onPress={() => {
              setPhotoIndex(i)
              setFullscreen(true)
            }}
          >
            <RemoteImage
              style={$.image}
              source={{ uri: url }}
            />
          </TouchableOpacity>)}
      </ScrollView>
    </>
  )
}

export default Gallery
