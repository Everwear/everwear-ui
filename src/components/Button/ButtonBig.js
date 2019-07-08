import React from 'react'
import { cn } from '../../common/utils'
import $ from './ButtonBigStyles'

import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

const ButtonBig = ({
  style = {},
  text,
  label,
  theme,
  selected,
  disabled,
  loading,
  onPress,
  testIDText,
  testIDLabel,
  ...props
}) => {
  const content = (
    <>
      {loading &&
        <ActivityIndicator
          color="#fff"
        />}
      {!loading && !!text &&
        <Text
          numberOfLines={1}
          allowFontScaling={false}
          ellipsizeMode="tail"
          testID={testIDText}
          style={cn($, {
            'text': true,
            'textSelected': selected,
            'textDisabled': disabled,
          })}
        >
          {text}
        </Text>}
      {!loading && !!label &&
        <Text
          numberOfLines={1}
          allowFontScaling={false}
          ellipsizeMode="tail"
          testID={testIDLabel}
          style={cn($, {
            'label': true,
            'labelSelected': selected,
            'labelDisabled': disabled,
          })}
        >
          {label}
        </Text>}
    </>
  )

  const s = [cn($, {
    'container': true,
    'selectedContainer': selected,
    'disabledContainer': disabled,
  }), style]

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={s}
        {...props}
      >
        {content}
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={s}
      {...props}
    >
      {content}
    </View>
  )
}

export default ButtonBig
