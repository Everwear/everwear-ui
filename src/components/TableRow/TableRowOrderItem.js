import React from 'react'
import { View, Text } from 'react-native'
import ItemPhoto from '../ItemPhoto/ItemPhoto'
import TableRowBase from './TableRowBase'
import { cn, _00 } from '../../common/utils'
import $ from './TableRowOrderItemStyles'

const TableRowOrderItem = ({
  name,
  size,
  price,
  originalPrice,
  photo,
  ratio,
  orderStatus,
  returnStatus,
  quantity,
  otherItems,
  available,
  children,
  ...props
}) => {
  return (
    <TableRowBase
      {...props}
      fullWidthSep={true}
      style={cn($, {
        'inactive': !available || ['canceled', 'failed'].includes(orderStatus),
      })}
      imageView={
        <View style={$.imageWrap}>
          <View style={$.imageOverlay}/>
          <ItemPhoto
            style={$.image}
            width={100}
            height={128}
            ratio={ratio}
            uri={photo}
          />
        </View>
      }
      footerView={otherItems && (
        <View style={$.otherItems}>
          {otherItems.map((item) =>
            <ItemPhoto
              key={item.id}
              uri={item.uri}
              style={cn($, {
                'otherItem': true,
                'otherItemUnavailable': !item.available,
              })}
            />)}
        </View>
      )}
    >
      <View style={$.container}>
        <Text style={$.title} numberOfLines={3}>{name}</Text>
        {available &&
          <>
            <View style={$.row}>
              <Text style={$.price}>
                {originalPrice ? null : `$${_00(Math.round(price * quantity * 100) / 100)}`}
                {originalPrice &&
                  <>
                    <Text style={$.priceSale}>${_00(Math.round(price * quantity * 100) / 100)}{' '}</Text>
                    <Text style={$.priceOriginal}>${_00(Math.round(originalPrice * quantity * 100) / 100)}</Text>
                  </>}
              </Text>
            </View>
            <View style={$.row}>
              {!returnStatus && orderStatus && !['paid', 'canceled'].includes(orderStatus) &&
                <Text style={$.status}>
                  Pay later if you keep it
                </Text>}
              {returnStatus === 'PENDING' &&
                <Text style={$.statusOrange}>
                  Return pending
                </Text>}
              {returnStatus === 'NOT_RETURNABLE' &&
                <Text style={$.statusRed}>
                  Not returnable
                </Text>}
              {returnStatus === 'RETURNED' &&
                <Text style={$.statusGreen}>
                  Rerturned
                </Text>}
            </View>
          </>}
        {!available &&
          <View style={$.row}>
            <Text style={$.price}>Not available</Text>
          </View>}
        <View style={$.row}>
          <Text style={$.param}>Qty: {quantity}</Text>
          <Text style={$.param}>Size: {size}</Text>
        </View>
      </View>
      {children}
    </TableRowBase>
  )
}

export default TableRowOrderItem
