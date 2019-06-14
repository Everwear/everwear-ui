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
      <TouchableOpacity
        key={tab.text}
        onPress={() => {
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
            <Text style={$.text}>{tab.text}</Text>
          </View>
        </View>
      </TouchableOpacity>)}
  </View>
)

export default Tabs
