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
      'containerDisabled': disabled,
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
          'labelDisabled': disabled,
        })}
      >
        {children}
      </Text>}
  </TouchableOpacity>
)
