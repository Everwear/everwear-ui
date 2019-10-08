import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { cn } from '../../common/utils'
import xor from 'lodash/xor'
import $ from './TogglesStyles'

const Toggles = ({
  value,
  options,
  onChange,
  style,
}) => (
  <ScrollView
    style={[$.root, style]}
    contentContainerStyle={$.content}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
  >
    <TouchableOpacity
      style={cn($, {
        'toggle': true,
        'toggleSelected': value === null,
      })}
      onPress={() => {
        onChange(null)
      }}
    >
      <Text
        numberOfLines={1}
        allowFontScaling={false}
        ellipsizeMode="tail"
        style={cn($, {
          'label': true,
          'labelSelected': value === null,
        })}
      >
        All
      </Text>
    </TouchableOpacity>
    {options.map((option) => {
      const selected = value === null || value.includes(option.value)

      return (
        <TouchableOpacity
          key={option.title}
          style={cn($, {
            'toggle': true,
            'toggleSelected': selected,
          })}
          onPress={() => {
            onChange(xor(value, [option.value]))
          }}
        >
          <Text
            numberOfLines={1}
            allowFontScaling={false}
            ellipsizeMode="tail"
            style={cn($, {
              'label': true,
              'labelSelected': selected,
            })}
          >
            {option.title}
          </Text>
        </TouchableOpacity>
      )
    })}
  </ScrollView>
)

export default Toggles
