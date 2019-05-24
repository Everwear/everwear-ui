import React from 'react'
import { View, Text } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import ComboBox from '../ComboBox/ComboBox'
import TableRowBase from './TableRowBase'
import $ from './TableRowBagItemStyles'

const TableRowBagItem = ({
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
              uri: '',
            }}
          />
        </View>
      }
    >
      <View style={$.container}>
        <Text style={$.title}>
          ASOS DESIGN cropped pink suit blazer
        </Text>
        <View style={$.row}>
          <Text style={$.price}>$55.97</Text>
          <Text style={$.label}>Pay later if you keep it</Text>
        </View>
        <View style={$.row}>
          <ComboBox style={$.qty}>Qty: 1</ComboBox>
          <ComboBox style={$.size}>Size: S</ComboBox>
        </View>
      </View>
    </TableRowBase>
  )
}

export default TableRowBagItem
