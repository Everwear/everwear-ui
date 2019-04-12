import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import $ from './TableRowOperationStyles'
import groupBy from 'lodash/groupBy'

const TableRowOperation = ({
  charge,
  ...props
}) => {
  const { order } = charge
  const items = groupBy(order.details, (item) => item.status.name)
  const itemsStatus = []

  if (items.Kept) {
    itemsStatus.push(`${items.Kept.length} kept`)
  }
  if (items.Returned) {
    itemsStatus.push(`${items.Returned.length} returned`)
  }

  return (
    <TableRowBase {...props}>
      <View style={$.container}>
        <View style={$.row}>
          <Text style={$.store}>Asos</Text>
          <Text style={$.amount}>
            ${charge.amount}
          </Text>
        </View>
        <Text style={$.text}>
          {itemsStatus.join(', ')}
          {order.charge && `\nPersonal card charged $${order.charge.amount}`}
        </Text>
      </View>
    </TableRowBase>
  )
}

export default TableRowOperation
