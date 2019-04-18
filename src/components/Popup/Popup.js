import React, { Component } from 'react'
import {
  View,
  Modal,
  PanResponder,
  Animated,
} from 'react-native'

import $ from './PopupStyles'

class Popup extends Component {
  state = {
    pan: new Animated.ValueXY({
      x: 0,
      y: 300,
    }),
  }

  componentWillMount() {
    const { pan } = this.state
    const { onClose } = this.props

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      // onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        pan.setValue({
          y: Math.max(gesture.dy, 0),
          x: 0,
        })
      },
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dy > 100) {
          Animated.spring(pan, {
            // useNativeDriver: true,
            toValue: { x: 0, y: 300 },
            overshootClamping: true,
            speed: 30,
          }).start(() => {
            onClose()
          })
        } else {
          Animated.spring(pan, {
            // useNativeDriver: true,
            toValue: { x: 0, y: 0 },
            overshootClamping: true,
            speed: 30,
          }).start()
        }
      },
    })
  }

  componentDidMount() {
    const { pan } = this.state

    Animated.spring(pan, {
      // useNativeDriver: true,
      toValue: { x: 0, y: 0 },
      bounciness: 0,
      speed: 30,
    }).start()
  }

  render() {
    const {
      onClose,
      children,
      ...props
    } = this.props

    const { pan } = this.state

    return (
      <Modal
        transparent={true}
        onRequestClose={onClose}
        {...props}
      >
        <Animated.View
          style={[$.container, {
            opacity: pan.y.interpolate({
              inputRange: [0, 300],
              outputRange: [1, 0],
            })
          }]}
        >
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[$.modal, {
              transform: pan.getTranslateTransform(),
            }]}
          >
            <View style={$.bar}/>
            <View style={$.content}>
              {children}
            </View>
          </Animated.View>
        </Animated.View>
      </Modal>
    )
  }
}

export default Popup
