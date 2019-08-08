import React from 'react'
import { View } from 'react-native'
import TableRow from './TableRow'
import { cn } from '../../common/utils'
import $ from './TableRowPathStyles'

const TableRowArrow = ({
  passed,
  current,
  textStyle,
  ...props
}) => {
  const {
    last,
    first,
  } = props

  return (
    <TableRow
      {...props}
      textStyle={[cn($, {
        'text': true,
        'textCurrent': current,
      }), textStyle]}
      imageViewStyle={$.container}
      imageView={
        <>
          <View
            style={cn($, {
              'line': true,
              'linePassed': passed,
              'lineFirst': first,
              'lineLast': last,
            })}
          />
          {current && !first &&
            <View
              style={[
                $.line,
                $.lineCurrent,
              ]}
            />}
          <View
            style={cn($, {
              'circle': true,
              'circleCurrent': current || passed,
            })}
          />
        </>
      }
    />
  )
}

export default TableRowArrow
