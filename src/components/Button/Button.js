import React from 'react'
import { cn } from '../../common/utils'
import $ from './ButtonStyles'

import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

export default ({
  style = {},
  theme,
  small,
  selected,
  disabled,
  loading,
  onPress,
  children,
  testIDText,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[cn($, {
      'container': true,
      'smallContainer': small,
      [`${theme}Container`]: !!theme,
      'selectedContainer': selected,
      'disabledContainer': disabled,
    }), style]}
    {...props}
  >
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
          'smallLabel': small,
          [`${theme}Label`]: !!theme,
          'selectedLabel': selected,
          'disabledLabel': disabled,
        })}
      >
        {children}
      </Text>}
  </TouchableOpacity>
)
