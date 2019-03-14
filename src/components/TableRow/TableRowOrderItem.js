import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import { cn } from '../../common/utils'
import $ from './TableRowOrderItemStyles'

const TableRowOrderItem = ({
  order,
  product,
  ...props
}) => {
  const isReturned = product.status.name === 'Returned'
  const isScheduledOrCompleted = [
    'Expecting The Return',
    'Scheduled Return',
    'Complete',
  ].includes(order.status.name)

  return (
    <TableRowBase
      {...props}
      image={{ uri: product.photo }}
      imageStyle={$.image}
    >
      <View style={$.container}>
        <View style={$.row}>
          <Text style={$.title}>{product.name}</Text>
          <Text style={$.price}>${product.price}</Text>
        </View>
        <View style={$.row}>
          <Text style={$.tags}>{product.size}</Text>
        </View>
        {isScheduledOrCompleted &&
          <View style={$.row}>
            <Text
              style={cn($, {
                status: true,
                statusReturned: isReturned,
              })}
            >
              {order.status.name}
            </Text>
          </View>}
      </View>
    </TableRowBase>
  )
}

export default TableRowOrderItem
