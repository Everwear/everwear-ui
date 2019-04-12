import React from 'react'
import { View, Text } from 'react-native'
import { cn } from '../../common/utils'
import $ from './ListItemStyles'

const ListItem = ({
  last,
  first,
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
    <View style={$.dot}/>
    <Text style={$.text}>
      {children}
    </Text>
  </View>
)

export default ListItem
