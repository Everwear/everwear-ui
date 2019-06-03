import React from 'react'
import { View, Text } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import ComboBox from '../ComboBox/ComboBox'
import TableRowBase from './TableRowBase'
import { CLR_RED } from '../../common/vars'
import $ from './TableRowBagItemStyles'

const TableRowBagItem = ({
  name,
  size,
  price,
  photo,
  quantity,
  onDelete,
  onChangeQuantity,
  swipeoutOnScroll,
  ...props
}) => {
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
              uri: photo,
            }}
          />
        </View>
      }
      swipeoutOnScroll={swipeoutOnScroll}
      swipeoutRight={[{
        text: 'Delete',
        type: 'delete',
        backgroundColor: CLR_RED,
        underlayColor: CLR_RED,
        onPress: onDelete,
      }]}
    >
      <View style={$.container}>
        <Text style={$.title}>{name}</Text>
        <View style={$.row}>
          <Text style={$.price}>${price}</Text>
          <Text style={$.label}>Pay later if you keep it</Text>
        </View>
        <View style={$.row}>
          <ComboBox
            style={$.qty}
            onPress={onChangeQuantity}
          >
            Qty: {quantity}
          </ComboBox>
          <Text style={$.size}>
            Size: {size}
          </Text>
        </View>
      </View>
    </TableRowBase>
  )
}

export default TableRowBagItem
