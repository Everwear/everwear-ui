import VMasker from 'vanilla-masker'
import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { cn } from '../../common/utils'
import $ from './CreditCardFieldStyles'

class CreditCardField extends Component {
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
      valueNumber,
      valueExpiry,
      valueCVV,
      onChangeNumber,
      onChangeExpiry,
      onChangeCVV,
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
            style={$.number}
            value={valueNumber}
            autoFocus={true}
            placeholderTextColor="#8d90a1"
            placeholder="Card number"
            keyboardType="numeric"
            maxLength={19}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChangeText={(value) => {
              onChangeNumber(VMasker.toPattern(value, '9999 9999 9999 9999'))
            }}
          />
          <TextInput
            style={$.expiry}
            value={valueExpiry}
            keyboardType="numeric"
            placeholder="MM/YY"
            maxLength={5}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChangeText={(value) => {
              onChangeExpiry(VMasker.toPattern(value, '99/99'))
            }}
          />
          <TextInput
            style={$.cvv}
            value={valueCVV}
            keyboardType="numeric"
            placeholder="CVV"
            maxLength={4}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChangeText={(valueCVV) => {
              onChangeCVV(valueCVV)
            }}
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

export default CreditCardField
