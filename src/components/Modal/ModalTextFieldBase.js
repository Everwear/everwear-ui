import React, { Component } from 'react'
import $ from './ModalTextFieldBaseStyles'
import {
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  TextInput,
} from 'react-native'

class ModalTextFieldBase extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  render() {
    const {
      text,
      caption,
      keyboardType,
      onDone,
      onCancel,
    } = this.props

    const {
      value,
    } = this.state

    return (
      <>
        <View style={$.content}>
          <Text style={$.text}>
            {text}
          </Text>
          {caption &&
            <Text style={$.caption}>
              {caption}
            </Text>}
          <TextInput
            autoFocus
            style={$.input}
            keyboardType={keyboardType}
            onChangeText={(value) => {
              this.setState({
                value,
              })
            }}
          />
        </View>
        <View style={$.buttons}>
          <TouchableHighlight
            style={[$.button, $.buttonSep]}
            underlayColor="#dce0e3"
            onPress={() => {
              requestAnimationFrame(() => {
                onCancel()
              })
            }}
          >
            <Text style={$.buttonText}>
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={$.button}
            underlayColor="#dce0e3"
            onPress={() => {
              requestAnimationFrame(() => {
                onDone(value)
              })
            }}
          >
            <Text style={[$.buttonText, { fontWeight: '600' }]}>
              Done
            </Text>
          </TouchableHighlight>
        </View>
      </>
    )
  }
}

export default ModalTextFieldBase
