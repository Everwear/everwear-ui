import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import $ from './TableRowStyles'

const TableRow = ({
  text,
  textStyles,
  textValue,
  textValueStyles,
  textCaption,
  textCaptionStyles,
  children,
  ...props
}) => (
  <TableRowBase {...props}>
    <View style={$.container}>
      {text &&
        <View style={$.row}>
          <Text style={[$.text, textStyles]}>{text}</Text>
          <Text style={[$.textValue, textValueStyles]}>{textValue}</Text>
        </View>}
      {textCaption &&
        <View style={$.row}>
          <Text style={[$.textCaption, textCaptionStyles]}>{textCaption}</Text>
        </View>}
    </View>
    {children}
  </TableRowBase>
)

export default TableRow
