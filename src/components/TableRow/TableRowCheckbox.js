import React from 'react'
import TableRow from './TableRow'

const IMAGE_OFF = require('./img/checkbox_off.png')
const IMAGE_ON = require('./img/checkbox_on.png')

const TableRowCheckbox = ({
  checked,
  disabled,
  onPress,
  value,
  style,
  ...props
}) => {
  let cb = onPress

  if (typeof(value) !== 'undefined') {
    cb = () => {
      onPress(value)
    }
  }

  return (
    <TableRow
      {...props}
      fullWidthSep={true}
      image={checked ? IMAGE_ON : IMAGE_OFF}
      onPress={disabled ? null : cb}
      style={[disabled && {
        opacity: 0.3,
      }, style]}
    />
  )
}

export default React.memo(TableRowCheckbox)
