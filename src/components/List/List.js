import React from 'react'
import { View } from 'react-native'
import $ from './ListStyles'

const List = ({
  style,
  children,
}) => {
  const elements = React.Children.toArray(children)
  const last = elements.length - 1

  return (
    <View style={[$.container, style]}>
      {elements.map((child, i) => {
        return React.cloneElement(child, {
          index: i,
          first: i === 0,
          last: i === last,
        })
      })}
    </View>
  )
}

export default List
