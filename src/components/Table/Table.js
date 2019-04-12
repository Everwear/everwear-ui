import React, { Component } from 'react'
import { View, Text } from 'react-native'
import $ from './TableStyles'

class Table extends Component {
  render() {
    const {
      style,
      header,
      footer,
      children,
    } = this.props

    const elements = React.Children.toArray(children)
    const last = elements.length - 1

    return (
      <View style={[$.container, style]}>
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
      </View>
    )
  }
}

export default Table
