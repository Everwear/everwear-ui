import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import $ from './TextFieldStyles'

class TextField extends Component {
  state = {
    focused: false,
  }

  toggleFocus = () => {
    this.setState(s => ({
      focused: !s.focused,
    }))
  }

  render () {
    const {
      style,
      hint,
      value,
      testID,
    } = this.props

    const {
      focused,
    } = this.state

    return (
      <View style={[$.container, style]}>
        <View style={[$.inputWrap, focused && $.focused]}>
          <TextInput
            {...this.props}
            testID={testID}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            style={$.input}
            value={value}
          />
        </View>
        {hint &&
          <Text style={$.hint}>
            {hint}
          </Text>}
      </View>
    )
  }
}

export default TextField
