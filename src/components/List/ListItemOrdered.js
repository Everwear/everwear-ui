import React from 'react'
import { View, Text } from 'react-native'
import { cn } from '../../common/utils'
import $ from './ListItemOrderedStyles'

const ListItem = ({
  last,
  first,
  index,
  style,
  children,
}) => (
  <View
    style={[cn($, {
      'container': true,
      'containerFirst': first,
      'containerLast': last,
    }), style]}
  >
    <Text style={$.num}>{index+1}</Text>
    <Text style={$.text}>
      {children}
    </Text>
  </View>
)

export default ListItem
