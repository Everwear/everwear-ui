import React from 'react'
import { cn } from '../../common/utils'
import $ from './ButtonSmallStyles'

import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

const ButtonSmall = ({
  style = {},
  theme,
  selected,
  disabled,
  loading,
  onPress,
  children,
  testIDText,
  ...props
}) => {
  const content = (
    <>
      {loading &&
        <ActivityIndicator
          color="#fff"
        />}
      {loading ||
        <Text
          numberOfLines={1}
          allowFontScaling={false}
          ellipsizeMode="tail"
          testID={testIDText}
          style={cn($, {
            'label': true,
            [`${theme}Label`]: !!theme,
            'selectedLabel': selected,
            'disabledLabel': disabled,
          })}
        >
          {children}
        </Text>}
    </>
  )

  const s = [cn($, {
    'container': true,
    [`${theme}Container`]: !!theme,
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

export default ButtonSmall
