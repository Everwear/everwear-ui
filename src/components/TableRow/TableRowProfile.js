import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import $ from './TableRowProfileStyles'

const TableRowOrder = ({
  profile,
  ...props
}) => {
  const { name } = profile

  return (
    <TableRowBase
      {...props}
      image={require('./img/user_pic.png')}
      imageStyle={$.image}
    >
      <View style={$.container}>
        <Text style={$.name}>{name}</Text>
      </View>
    </TableRowBase>
  )
}

export default TableRowOrder
