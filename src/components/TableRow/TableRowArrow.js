import React from 'react'
import { Image } from 'react-native'
import TableRow from './TableRow'
import $ from './TableRowArrowStyles'

const TableRowArrow = (props) => (
  <TableRow {...props}>
    <Image source={require('./img/arrow.png')} style={$.arrow}/>
  </TableRow>
)

export default TableRowArrow
