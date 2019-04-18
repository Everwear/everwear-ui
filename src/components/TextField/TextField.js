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
      hint,
      style,
      forwardedRef,
      ...props
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
            {...props}
            ref={forwardedRef}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            placeholderTextColor="#8d90a1"
            style={$.input}
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

export default React.forwardRef((props, ref) => {
  return (
    <TextField
      {...props}
      forwardedRef={ref}
    />
  )
})
