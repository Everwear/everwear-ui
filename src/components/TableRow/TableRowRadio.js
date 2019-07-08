import React from 'react'
import TableRow from './TableRow'

const IMAGE_OFF = require('./img/radio_off.png')
const IMAGE_ON = require('./img/radio_on.png')

const TableRowRadio = ({
  checked,
  ...props
}) => (
  <TableRow
    {...props}
    image={checked ? IMAGE_ON : IMAGE_OFF}
    fullWidthSep={true}
  />
)

export default TableRowRadio
