import React, { Component } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DeviceInfo from 'react-native-device-info'
import Button from '../Button/Button'
import $ from './BottomButtonViewStyles'

import {
  View,
  ScrollView,
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
      refreshControl,
      buttonVisible = true,
      avoidKeyboardScrollView,
      avoidKeyboard,
      children,
      testIDButton,
      testIDButtonText,
      testIDScrollView,
      ...props
    } = this.props

    let scrollView

    if (avoidKeyboardScrollView) {
      scrollView = (
        <KeyboardAwareScrollView
          {...props}
          enableOnAndroid={true}
          extraScrollHeight={100}
          testID={testIDScrollView}
          ref={(ref) => this.scrollView = ref}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[$.bodyContent, style]}
          style={$.body}
        >
          {children}
        </KeyboardAwareScrollView>
      )
    } else {
      scrollView = (
        <ScrollView
          {...props}
          ref={(ref) => this.scrollView = ref}
          contentContainerStyle={[$.bodyContent, style]}
          refreshControl={refreshControl}
          testID={testIDScrollView}
          style={$.body}
        >
          {children}
        </ScrollView>
      )
    }

    const component = (
      <View style={$.container}>
        {scrollView}
        {buttonVisible &&
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
      </View>
    )

    if (avoidKeyboard) {
      return (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={KEYBOARD_OFFSET}
          style={$.kbaView}
          enabled={true}
        >
          {component}
        </KeyboardAvoidingView>
      )
    }

    return component
  }
}

export default BottomButtonView
