import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { cn } from '../../common/utils'
import $ from './TabsStyles'

const Tabs = ({
  value,
  options,
  onChange,
  style,
}) => (
  <View style={[$.container, style]}>
    {options.map((tab) =>
      <TabWrap
        tab={tab}
        key={tab.text}
        onChange={() => {
          onChange(tab.value)
        }}
      >
        <View style={$.tabWrap}>
          <View
            style={cn($, {
              'tab': true,
              'tabSelected': tab.value === value,
            })}
          >
            <Text
              style={cn($, {
                'text': true,
                'textDisabled': tab.disabled,
              })}
            >
              {tab.text}
            </Text>
          </View>
        </View>
      </TabWrap>)}
  </View>
)

const TabWrap = ({
  tab,
  onChange,
  children,
}) => {
  if (tab.disabled) {
    return children
  }
  return (
    <TouchableOpacity onPress={onChange}>
      {children}
    </TouchableOpacity>
  )
}

export default Tabs
