import React from 'react'
import { cn } from '../../common/utils'
import $ from './ButtonSmallStyles'

import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

export default ({
  style = {},
  theme,
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
          [`${theme}Label`]: !!theme,
          'selectedLabel': selected,
          'disabledLabel': disabled,
        })}
      >
        {children}
      </Text>}
  </TouchableOpacity>
)
