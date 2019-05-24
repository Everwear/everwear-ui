import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
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
  onInfo,
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
    {!!onInfo &&
      <TouchableOpacity
        hitSlop={{
          top: 16,
          left: 16,
          bottom: 16,
          right: 16,
        }}
        onPress={() => {
          requestAnimationFrame(() => {
            onInfo()
          })
        }}
      >
        <Image
          source={require('./img/info.png')}
          style={$.info}
        />
      </TouchableOpacity>}
    {children}
  </TableRowBase>
)

export default TableRow
