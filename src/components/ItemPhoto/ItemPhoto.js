import React, { Component } from 'react'
import { View, Animated, Image } from 'react-native'
import $, {
  CONTAINER_WIDTH,
  CONTAINER_HEIGHT,
} from './ItemPhotoStyles'

class ItemPhoto extends Component {
  constructor(props) {
    super(props)
    this.onLoad = this.onLoad.bind(this)
    this.state = {
      opacity: new Animated.Value(0),
      height: props.height || CONTAINER_HEIGHT,
      width: props.width || CONTAINER_WIDTH,
    }
  }

  onLoad() {
    const { source } = this.props
    const { opacity, width } = this.state

    Image.getSize(source.uri, async (w, h) => {
      const r = h / w
      const height = width * r

      this.setState({
        height,
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
      <View
        style={[$.container, style, {
          width: props.width || CONTAINER_WIDTH,
          height: props.height || CONTAINER_HEIGHT,
        }]}
      >
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