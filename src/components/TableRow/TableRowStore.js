import React from 'react'
import { View, Text, Image } from 'react-native'
import TableRowBase from './TableRowBase'
import StoreLogo from '../StoreLogo/StoreLogo'
import ButtonSmall from '../Button/ButtonSmall'
import $ from './TableRowStoreStyles'

const TableRowStore = ({
  store,
  onAdd,
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
        {status === 'Authorized' &&
          <Text style={$.authorized}>
            Authorized
          </Text>}
      </View>
      {status !== 'Authorized' &&
        <ButtonSmall
          style={$.add}
          onPress={onAdd}
        >
          Add
        </ButtonSmall>}
      {status === 'Authorized' &&
        <Image
          source={require('./img/arrow.png')}
          style={$.arrow}
        />}
    </TableRowBase>
  )
}

export default TableRowStore
