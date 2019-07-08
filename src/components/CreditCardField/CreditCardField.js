import VMasker from 'vanilla-masker'
import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { CLR_MANATEE } from '../../common/vars'
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
      testIDNumber,
      testIDExpiry,
      testIDCVV,
    } = this.props

    const {
      focused,
    } = this.state

    let mask = '9999 9999 9999 9999'

    if (/^3[47]\d{0,13}/.test(valueNumber)) {
      mask = '9999 999999 99999' // american express
    }
    if (/^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/.test(valueNumber)) {
      mask = '9999 999999 9999' // diners
    }
    if (/^(?:2131|1800)\d{0,11}/.test(valueNumber)) {
      mask = '9999 999999 99999' // jcb15
    }

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
            testID={testIDNumber}
            autoFocus={true}
            placeholderTextColor={CLR_MANATEE}
            placeholder="Card number"
            keyboardType="numeric"
            maxLength={19}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChangeText={(value) => {
              onChangeNumber(VMasker.toPattern(value, mask))
              if (value.length >= mask.length) {
                this.inputExpiry.focus()
              }
            }}
          />
          <TextInput
            style={$.expiry}
            value={valueExpiry}
            keyboardType="numeric"
            placeholder="MM/YY"
            maxLength={5}
            testID={testIDExpiry}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChangeText={(value) => {
              onChangeExpiry(VMasker.toPattern(value, '99/99'))
              if (value.length >= 5) {
                this.inputCVV.focus()
              }
            }}
            ref={(ref) => {
              this.inputExpiry = ref
            }}
          />
          <TextInput
            style={$.cvv}
            value={valueCVV}
            keyboardType="numeric"
            placeholder="CVV"
            maxLength={4}
            testID={testIDCVV}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChangeText={(valueCVV) => {
              onChangeCVV(valueCVV)
            }}
            ref={(ref) => {
              this.inputCVV = ref
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
