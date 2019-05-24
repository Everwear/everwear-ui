import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { cn } from '../../common/utils'
import $ from './TabsStyles'

const Tabs = ({
  tabs,
  style,
}) => (
  <View style={[$.container, style]}>
    {tabs.map((tab) =>
      <TouchableOpacity
        key={tab.text}
        onPress={tab.onPress}
      >
        <View
          style={cn($, {
            'tab': true,
            'tabSelected': tab.selected,
          })}
        >
          <Text style={$.text}>{tab.text}</Text>
        </View>
      </TouchableOpacity>)}
  </View>
)

export default Tabs
