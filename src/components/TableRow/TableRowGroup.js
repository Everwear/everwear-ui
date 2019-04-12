import React from 'react'
import { View, Text } from 'react-native'
import $ from './TableRowGroupStyles'

const TableRowGroup = ({
  children,
}) => (
  <View style={$.container}>
    <Text style={$.text}>
      {children}
    </Text>
  </View>
)

export default TableRowGroup
