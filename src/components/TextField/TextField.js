import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { cn } from '../../common/utils'
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
        <View
          style={cn($, {
            'inputWrap': true,
            'inputWrapFocus': focused,
          })}
        >
          <TextInput
            {...this.props}
            testID={testID}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            placeholderTextColor="#8d90a1"
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
