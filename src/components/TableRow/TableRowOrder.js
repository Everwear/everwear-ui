import React from 'react'
import moment from 'moment'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import StoreLogo from '../StoreLogo/StoreLogo'
import { cn } from '../../common/utils'
import $ from './TableRowOrderStyles'

const TableRowOrder = ({
  order,
  children,
  ...props
}) => {
  const isFailed = order.status.name === 'Charge Failed'
  const isActive = [
    'Delivered',
    'Scheduled Return',
    'On it\'s way', 'Placed',
  ].includes(order.status.name)

  return (
    <TableRowBase
      {...props}
      imageView={<StoreLogo uri={order.store.photo}/>}
    >
      <View style={$.container}>
        <View style={$.row}>
          <Text style={$.title}>
            {order.details.length}{' '}
            {order.details.length === 1 ? 'item' : 'items'}
          </Text>
          <Text
            style={cn($, {
              status: true,
              statusActive: isActive,
              statusFailed: isFailed,
            })}
          >
            {order.status.name}
          </Text>
        </View>
        <View style={$.row}>
          <Text style={$.tags}>{moment(order.date).format('MMM D, YYYY')} • {order.store.name}</Text>
          <Text style={$.price}>${order.price}</Text>
        </View>
        {children}
      </View>
    </TableRowBase>
  )
}

export default TableRowOrder
