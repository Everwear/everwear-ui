import React from 'react'
import { Image } from 'react-native'
import TableRow from './TableRow'
import $ from './TableRowArrowStyles'

const TableRowArrow = ({
  children,
  ...props
}) => (
  <TableRow {...props}>
    {children}
    <Image source={require('./img/arrow.png')} style={$.arrow}/>
  </TableRow>
)

export default TableRowArrow
