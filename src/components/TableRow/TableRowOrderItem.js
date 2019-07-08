import React from 'react'
import { View, Text } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import TableRowBase from './TableRowBase'
import { cn } from '../../common/utils'
import $ from './TableRowOrderItemStyles'

const TableRowOrderItem = ({
  name,
  size,
  price,
  photo,
  status,
  quantity,
  otherItems,
  available,
  ...props
}) => {
  return (
    <TableRowBase
      {...props}
      fullWidthSep={true}
      style={cn($, {
        'inactive': !available || ['canceled', 'failed'].includes(status),
      })}
      imageView={
        <View style={$.imageWrap}>
          <View style={$.imageOverlay}/>
          <RemoteImage
            style={$.image}
            resizeMode="cover"
            source={{
              uri: photo,
            }}
          />
        </View>
      }
      footerView={otherItems && (
        <View style={$.otherItems}>
          {otherItems.map((item) =>
            <RemoteImage
              key={item.id}
              resizeMode="cover"
              source={{
                uri: item.uri,
              }}
              style={cn($, {
                'otherItem': true,
                'otherItemUnavailable': !item.available,
              })}
            />)}
        </View>
      )}
    >
      <View style={$.container}>
        <Text style={$.title} numberOfLines={3}>{name}</Text>
        {available &&
          <View style={$.row}>
            <Text style={$.price}>${price}</Text>
            {status !== 'paid' &&
              <Text style={$.status}>
                Not paid
              </Text>}
          </View>}
        {!available &&
          <View style={$.row}>
            <Text style={$.price}>Not available</Text>
          </View>}
        <View style={$.row}>
          <Text style={$.params} numberOfLines={1}>
            Qty: {quantity} Size: {size}
          </Text>
        </View>
      </View>
    </TableRowBase>
  )
}

export default TableRowOrderItem
