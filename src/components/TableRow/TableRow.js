import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import $ from './TableRowStyles'

const TableRow = ({
  text,
  textStyle,
  textValue,
  textValueStyle,
  textCaption,
  textCaptionStyle,
  children,
  ...props
}) => (
  <TableRowBase {...props}>
    <View style={$.container}>
      {text &&
        <View style={$.row}>
          <Text style={[$.text, textStyle]}>{text}</Text>
          <Text style={[$.textValue, textValueStyle]}>{textValue}</Text>
        </View>}
      {textCaption &&
        <View style={$.row}>
          <Text style={[$.textCaption, textCaptionStyle]}>{textCaption}</Text>
        </View>}
    </View>
    {children}
  </TableRowBase>
)

export default TableRow
