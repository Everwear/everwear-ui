import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import StoreLogo from '../StoreLogo/StoreLogo'
import { cn } from '../../common/utils'
import $ from './TableRowStoreStyles'

const TableRowOrder = ({
  store,
  ...props
}) => {
  const {
    name,
    photo,
    status,
    website
  } = store

  const isProcessing = status === 'Processing'
  const isAuthorized = status === 'Authorized'

  return (
    <TableRowBase
      {...props}
      imageView={<StoreLogo uri={photo} size="big"/>}
    >
      <View style={$.container}>
        <Text style={$.title}>{name}</Text>
        <Text
          style={cn($, {
            status: true,
            statusAuthorized: isAuthorized,
            statusProcessing: isProcessing,
          })}
        >
          {!!status || website}
          {!!status && (isProcessing ? 'Pending Authorization' : status)}
        </Text>
      </View>
    </TableRowBase>
  )
}

export default TableRowOrder
