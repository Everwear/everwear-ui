import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import $ from './TableRowStyles'

const TableRow = ({
  text,
  textStyle,
  textValue,
  textValueStyle,
  textLabel,
  textLabelStyle,
  textCaption,
  textCaptionStyle,
  children,
  ...props
}) => (
  <TableRowBase {...props}>
    <View style={$.container}>
      {!!textLabel &&
        <Text style={[$.textLabel, textLabelStyle]}>
          {textLabel}
        </Text>}
      {!!text &&
        <View style={$.row}>
          <Text style={[$.text, textStyle]}>{text}</Text>
          <Text style={[$.textValue, textValueStyle]}>{textValue}</Text>
        </View>}
      {!!textCaption &&
        <Text style={[$.textCaption, textCaptionStyle]}>
          {textCaption}
        </Text>}
    </View>
    {children}
  </TableRowBase>
)

export default TableRow
