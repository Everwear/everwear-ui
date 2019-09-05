import React, { Component } from 'react'
import $ from './ModalTextFieldBaseStyles'
import {
  Text,
  View,
  TouchableHighlight,
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
      textDone = 'Done',
      textCancel = 'Cancel',
      autoCapitalize,
      autoCorrect,
      keyboardType,
      placeholder,
      onDone,
      onClose,
    } = this.props

    const {
      value,
    } = this.state

    return (
      <>
        <View style={$.content}>
          {text &&
            <Text style={$.text}>{text}</Text>}
          {caption &&
            <Text style={$.caption}>{caption}</Text>}
          <TextInput
            value={value}
            style={$.input}
            autoFocus={true}
            underlineColorAndroid="transparent"
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            placeholder={placeholder}
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
                onClose()
              })
            }}
          >
            <Text style={$.buttonText}>
              {textCancel}
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
            <Text style={[$.buttonText, $.buttonTextBold]}>
              {textDone}
            </Text>
          </TouchableHighlight>
        </View>
      </>
    )
  }
}

export default ModalTextFieldBase
