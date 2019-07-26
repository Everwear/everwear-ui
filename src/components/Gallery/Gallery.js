import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, Modal } from 'react-native'
import ImageGallery from 'react-native-image-gallery'
import RemoteImage from '../RemoteImage/RemoteImage'
import Link from '../Link/Link'
import $ from './GalleryStyles'

const Gallery = ({
  photos,
  ratio,
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
        contentContainerStyle={$.content}
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
              source={{ uri: url }}
              style={{
                height: 400,
                width: 400 * (1 / ratio),
              }}
            />
          </TouchableOpacity>)}
      </ScrollView>
    </>
  )
}

export default Gallery
