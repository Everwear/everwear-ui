import React, { Component } from 'react'
import { View, Animated, Image } from 'react-native'
// import { getPixelRGBA } from 'react-native-get-pixel'
import $, {
  CONTAINER_WIDTH,
  CONTAINER_HEIGHT,
} from './ItemPhotoStyles'

class ItemPhoto extends Component {
  constructor() {
    super()
    this.onLoad = this.onLoad.bind(this)
    this.state = {
      opacity: new Animated.Value(0),
      height: CONTAINER_HEIGHT,
      width: CONTAINER_WIDTH,
    }
  }

  onLoad() {
    const { source } = this.props
    const { opacity, height } = this.state

    Image.getSize(source.uri, async (w, h) => {
      const r = height / h
      const width = w * r

      // const color = await getPixelRGBA('sample.png', 0, 0)

      // console.log(color)

      this.setState({
        width,
      })

      Animated.timing(opacity, {
        duration: 300,
        toValue: 1,
      }).start()
    })
  }

  render() {
    const { style, ...props } = this.props
    const { opacity, height, width } = this.state

    return (
      <View style={[$.container, style]}>
        <Animated.Image
          {...props}
          onLoad={this.onLoad}
          style={[$.image, {
            opacity,
            height,
            width,
          }]}
        />
      </View>
    )
  }
}

export default ItemPhoto
