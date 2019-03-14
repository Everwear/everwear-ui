import React from 'react'
import { View } from 'react-native'
import TableRowOrder from './TableRowOrder'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './TableRowOrderStyles'

const TableRowOrderImages = ({
  order,
  ...props
}) => (
  <TableRowOrder order={order} {...props}>
    <View style={$.images}>
      {order.details.map((product) => (
        <RemoteImage
          key={product.id}
          style={$.image}
          resizeMode="contain"
          source={{
            uri: product.photo,
          }}
        />
      ))}
    </View>
  </TableRowOrder>
)

export default TableRowOrderImages
