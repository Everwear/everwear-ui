import React from 'react'
import TableRow from './TableRow'

const IMAGE_OFF = require('./img/checkbox_off.png')
const IMAGE_ON = require('./img/checkbox_on.png')

const TableRowCheckbox = ({
  checked,
  ...props
}) => (
  <TableRow
    {...props}
    image={checked ? IMAGE_ON : IMAGE_OFF}
    fullWidthSep={true}
  />
)

export default TableRowCheckbox
