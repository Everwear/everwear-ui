import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import $ from './TableStyles'

class Table extends Component {
  render() {
    const {
      style,
      header,
      footer,
      onPress,
      children,
    } = this.props

    const elements = React.Children.toArray(children)
    const last = elements.length - 1
    const content = (
      <>
        {header &&
          <Text style={$.header}>
            {header}
          </Text>}
        <View style={$.body}>
          {elements.map((child, i) => {
            return React.cloneElement(child, {
              first: i === 0,
              last: i === last,
            })
          })}
        </View>
        {footer &&
          <View style={$.footerWrap}>
            <Text style={$.footer}>
              {footer}
            </Text>
          </View>}
      </>
    )

    if (onPress) {
      return (
        <TouchableOpacity style={[$.container, style]}>
          {content}
        </TouchableOpacity>
      )
    }

    return (
      <View style={[$.container, style]}>
        {content}
      </View>
    )
  }
}

export default Table
