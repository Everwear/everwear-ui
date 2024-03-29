import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import TableRowBase from './TableRowBase'
import $ from './TableRowStyles'

const TableRow = ({
  text,
  textStyle,
  textNumberOfLines,
  textValue,
  textValueStyle,
  textLabel,
  textLabelStyle,
  textCaption,
  textCaptionStyle,
  infoIconRed,
  infoIconRedFilled,
  infoIconOrange,
  onInfo,
  children,
  testIDText,
  testIDTextValue,
  testIDTextCaption,
  testIDTextLabel,
  ...props
}) => (
  <TableRowBase {...props}>
    <View style={$.container}>
      {!!textLabel &&
        <Text
          style={[$.textLabel, textLabelStyle]}
          testID={testIDTextLabel}
        >
          {textLabel}
        </Text>}
      {!!text &&
        <View style={$.row}>
          <Text
            style={[$.text, textStyle]}
            numberOfLines={textNumberOfLines}
            testID={testIDText}
          >
            {text}
          </Text>
          {!!textValue &&
            <Text
              style={[$.textValue, textValueStyle]}
              testID={testIDTextValue}
              numberOfLines={1}
            >
              {textValue}
            </Text>}
        </View>}
      {!!textCaption &&
        <Text
          style={[$.textCaption, textCaptionStyle]}
          testID={testIDTextCaption}
        >
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
        {!infoIconRed &&
        !infoIconRedFilled &&
        !infoIconOrange &&
          <Image
            source={require('./img/info.png')}
            style={$.info}
          />}
        {infoIconRed &&
          <Image
            source={require('./img/info_red.png')}
            style={$.info}
          />}
        {infoIconOrange &&
          <Image
            source={require('./img/info_orange.png')}
            style={$.info}
          />}
        {infoIconRedFilled &&
          <Image
            source={require('./img/info_red_filled.png')}
            style={$.info}
          />}
      </TouchableOpacity>}
    {children}
  </TableRowBase>
)

export default TableRow
