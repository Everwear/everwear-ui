import React from 'react'
import { View, Text } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import TableRowBase from './TableRowBase'
import { cn } from '../../common/utils'
import $ from './TableRowOrderItemStyles'

const TableRowOrder = ({
  name,
  size,
  price,
  photo,
  status,
  quantity,
  otherItemsPhoto,
  ...props
}) => {
  return (
    <TableRowBase
      {...props}
      fullWidthSep={true}
      style={cn($, {
        'inactive': ['canceled', 'failed'].includes(status),
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
      footerView={otherItemsPhoto && (
        <View style={$.otherItems}>
          {otherItemsPhoto.map((photo, i) =>
            <RemoteImage
              key={i}
              style={$.otherItem}
              resizeMode="cover"
              source={{
                uri: photo,
              }}
            />)}
        </View>
      )}
    >
      <View style={$.container}>
        <Text style={$.title} numberOfLines={3}>{name}</Text>
        <View style={$.row}>
          <Text style={$.price}>${price}</Text>
          <Text style={$.status}>
            {status === 'Paid' ? 'Paid' : 'Not paid'}
          </Text>
        </View>
        <View style={$.row}>
          <Text style={$.params} numberOfLines={1}>
            Qty: {quantity} Size: {size}
          </Text>
        </View>
      </View>
    </TableRowBase>
  )
}

export default TableRowOrder
