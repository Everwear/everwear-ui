import React from 'react'
import { View, Text } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import ButtonSmall from '../Button/ButtonSmall'
import TableRowBase from './TableRowBase'
import { cn } from '../../common/utils'
import $ from './TableRowOrderItemStyles'

const TableRowOrderItem = ({
  item,
  order,
  onReturn,
  onActions,
  ...props
}) => {
  const orderStatus = order.status.name
  const itemStatus = item.status.name

  const isOrderReturnable = ['Expecting The Return', 'Delivered'].includes(orderStatus)
  const isOrderComplete = ['Scheduled Return', 'Complete'].includes(orderStatus)
  const isItemReturned = itemStatus === 'Returned'

  return (
    <TableRowBase
      {...props}
      fullWidthSep={true}
      imageView={
        <View style={$.imageWrap}>
          <View style={$.imageOverlay}/>
          <RemoteImage
            style={$.image}
            resizeMode="cover"
            source={{
              uri: item.photo,
            }}
          />
        </View>
      }
    >
      <View style={$.container}>
        <Text style={$.title}>{item.name}</Text>
        <Text style={$.size}>Size: {item.size}</Text>
        <View style={$.row}>
          <Text style={$.price}>${item.price}</Text>
          {isOrderComplete &&
            <Text style={$.status}>
              {item.status.name}
            </Text>}
          {itemStatus === 'Returned' &&
            <Text style={[$.status, $.statusReturned]}>
              Returned
            </Text>}
          {isOrderReturnable && !isItemReturned &&
            <ButtonSmall onPress={onReturn}>
              Return
            </ButtonSmall>}
          {isOrderReturnable && isItemReturned &&
            <ButtonSmall onPress={onActions}>
              ...
            </ButtonSmall>}
        </View>
      </View>
    </TableRowBase>
  )
}

export default TableRowOrderItem
