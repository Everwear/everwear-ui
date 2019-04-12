import React from 'react'
import { View, Text, Image } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import StoreLogo from '../StoreLogo/StoreLogo'
import TableRowBase from './TableRowBase'
import { cn } from '../../common/utils'
import $ from './TableRowOrderStyles'

const TableRowOrder = ({
  order,
  children,
  ...props
}) => {
  const isFailed = order.status.name === 'Charge Failed'
  const isActive = [
    'Delivered',
    'Scheduled Return',
    'On it\'s way', 'Placed',
  ].includes(order.status.name)

  return (
    <TableRowBase
      {...props}
      fullWidthSep={true}
      imageView={
        <StoreLogo
          style={$.logo}
          uri={order.store.photo}
        />
      }
    >
      <Image
        source={require('./img/arrow.png')}
        style={$.arrow}
      />
      <View style={$.content}>
        <Text
          style={$.title}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {order.details.map(d => d.name).join(', ')}
        </Text>
        <Text
          style={cn($, {
            status: true,
            statusActive: isActive,
            statusFailed: isFailed,
          })}
        >
          {order.status.name}
        </Text>
        <View style={$.images}>
          {order.details.map((product) => (
            <View
              key={product.id}
              style={$.imageWrap}
            >
              <View style={$.imageOverlay}/>
              <RemoteImage
                style={$.image}
                resizeMode="cover"
                source={{
                  uri: product.photo,
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </TableRowBase>
  )
}

export default TableRowOrder
