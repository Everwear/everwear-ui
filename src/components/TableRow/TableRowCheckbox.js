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
    onPress={disabled ? null : onPress}
    style={disabled && {
      opacity: 0.3,
    }}
  />
)

export default TableRowCheckbox
