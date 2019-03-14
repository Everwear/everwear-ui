import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import $ from './RemoteImageStyles'

class RemoteImage extends Component {
  constructor() {
    super()
    this.onLoad = this.onLoad.bind(this)
    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  onLoad() {
    const { opacity } = this.state
    Animated.timing(opacity, {
      duration: 300,
      toValue: 1,
    }).start()
  }

  render() {
    const { opacity } = this.state
    const { style, ...props } = this.props

    return (
      <View style={[$.container, style]}>
        <Animated.Image
          {...props}
          onLoad={this.onLoad}
          style={[$.image, {
            opacity,
          }]}
        />
      </View>
    )
  }
}

export default RemoteImage
