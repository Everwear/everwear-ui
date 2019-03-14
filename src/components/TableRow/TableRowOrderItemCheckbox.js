import React from 'react'
import { View, Text, Image } from 'react-native'
import TableRowBase from './TableRowBase'
import $ from './TableRowOrderItemCheckboxStyles'

const TableRowOrderItemCheckbox = ({
  product,
  checked,
  onPress,
  ...props
}) => {
  return (
    <TableRowBase
      {...props}
      image={{ uri: product.photo }}
      imageStyle={$.image}
      onPress={() => {
        requestAnimationFrame(() => {
          onPress()
        })
      }}
    >
      {checked &&
        <Image style={$.checkbox} source={require('./img/checkbox_on.png')}/>}
      {checked ||
        <Image style={$.checkbox} source={require('./img/checkbox_off.png')}/>}
      <View style={$.container}>
        <Text style={$.title}>{product.name}</Text>
        <Text style={$.tags}>{product.size}</Text>
        <Text style={$.price}>${product.price}</Text>
      </View>
    </TableRowBase>
  )
}

export default TableRowOrderItemCheckbox
