import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ItemPhoto from '../ItemPhoto/ItemPhoto'
import ComboBox from '../ComboBox/ComboBox'
import TableRowBase from './TableRowBase'
import Link from '../Link/Link'
import { CLR_RED } from '../../common/vars'
import { _00 } from '../../common/utils'
import $ from './TableRowBagItemStyles'

const TableRowBagItem = ({
  name,
  size,
  price,
  photo,
  quantity,
  available,
  onDelete,
  onPressImage,
  onChangeQuantity,
  swipeoutOnScroll,
  ...props
}) => {
  return (
    <TableRowBase
      {...props}
      fullWidthSep={true}
      imageView={
        <TouchableOpacity
          style={$.imageWrap}
          onPress={onPressImage}
        >
          <ItemPhoto
            width={100}
            height={128}
            style={$.image}
            source={{
              uri: photo,
            }}
          />
        </TouchableOpacity>
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
        {!available &&
          <View style={{ opacity: 0.5 }}>
            <Text style={$.title}>{name}</Text>
            <View style={$.row}>
              <Text style={[$.text, { width: '100%' }]}>Not avaialbe</Text>
              <Text style={$.text}>Qty: {quantity}</Text>
              <Text style={$.text}>Size: {size}</Text>
            </View>
            <View style={$.row}>
              <Link
                color={CLR_RED}
                onPress={onDelete}
              >
                Delete
              </Link>
            </View>
          </View>}
        {available &&
          <>
            <Text style={$.title}>{name}</Text>
            <View style={$.row}>
              <Text style={$.price}>${_00(Math.round(price * quantity * 100) / 100)}</Text>
              <Text style={$.label}>Pay later if you keep it</Text>
            </View>
            <View style={$.row}>
              <ComboBox
                style={$.qty}
                onPress={onChangeQuantity}
              >
                Qty: {quantity}
              </ComboBox>
              <Text
                style={$.size}
                numberOfLines={1}
              >
                Size: {size}
              </Text>
            </View>
          </>}
      </View>
    </TableRowBase>
  )
}

export default TableRowBagItem
