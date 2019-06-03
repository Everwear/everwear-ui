import React from 'react'
import TableRow from './TableRow'

const IMAGE_OFF = require('./img/checkbox_off.png')
const IMAGE_ON = require('./img/checkbox_on.png')

const TableRowCheckbox = ({
  checked,
  disabled,
  onPress,
  ...props
}) => (
  <TableRow
    {...props}
    fullWidthSep={true}
    image={checked ? IMAGE_ON : IMAGE_OFF}
    style={disabled && {
      opacity: 0.3,
    }}
    onPress={disabled ? null : (() => {
      requestAnimationFrame(() => {
        onPress()
      })
    })}
  />
)

export default TableRowCheckbox
