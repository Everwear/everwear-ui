import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
import Button from '../Button/Button'
import $ from './BottomButtonViewStyles'

import {
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native'

const KEYBOARD_OFFSET = [
  'iPhone X',
  'iPhone XR',
  'iPhone XS',
  'iPhone XS Max',
].includes(DeviceInfo.getModel()) ? 85 : 64

class BottomButtonView extends Component {
  getScrollView() {
    return this.scrollView
  }

  render() {
    const {
      style,
      buttonText,
      buttonOnPress,
      buttonLoading,
      buttonVisibile = true,
      avoidKeyboardScrollView,
      avoidKeyboard,
      children,
      testIDButton,
      testIDButtonText,
      testIDScrollView,
      ...props
    } = this.props

    let scrollView = (
      <ScrollView
        {...props}
        ref={(ref) => this.scrollView = ref}
        contentContainerStyle={[$.bodyContent, style]}
        testID={testIDScrollView}
        style={$.body}
      >
        {children}
      </ScrollView>
    )

    if (avoidKeyboardScrollView) {
      scrollView = (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={KEYBOARD_OFFSET}
          style={$.kbaView}
          enabled={true}
        >
          {scrollView}
        </KeyboardAvoidingView>
      )
    }

    const component = (
      <SafeAreaView style={$.container}>
        {scrollView}
        {buttonVisibile &&
          <View style={$.buttonWrap}>
            <Button
              style={$.button}
              loading={buttonLoading}
              testID={testIDButton}
              testIDText={testIDButtonText}
              onPress={() => {
                requestAnimationFrame(() => {
                  buttonOnPress()
                })
              }}
            >
              {buttonText}
            </Button>
          </View>}
      </SafeAreaView>
    )

    if (avoidKeyboard) {
      return (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={KEYBOARD_OFFSET}
          style={$.kbaView}
          enabled
        >
          {component}
        </KeyboardAvoidingView>
      )
    }

    return component
  }
}

export default BottomButtonView
