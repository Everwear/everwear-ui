import React from 'react'
import { View, Text } from 'react-native'
import TableRowBase from './TableRowBase'
import StoreLogo from '../StoreLogo/StoreLogo'
import ButtonSmall from '../Button/ButtonSmall'
import $ from './TableRowStoreStyles'

const TableRowStore = ({
  store,
  ...props
}) => {
  const {
    name,
    photo,
    status,
  } = store

  return (
    <TableRowBase
      {...props}
      imageView={<StoreLogo uri={photo} size="big"/>}
    >
      <View style={$.container}>
        <Text style={$.title}>{name}</Text>
        {status === 'Authorised' &&
          <Text style={$.authorised}>
            Authorised
          </Text>}
      </View>
      <ButtonSmall style={$.add}>
        Add
      </ButtonSmall>
    </TableRowBase>
  )
}

export default TableRowStore
