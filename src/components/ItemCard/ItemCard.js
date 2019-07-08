import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './ItemCardStyles'

const ItemCard = ({
  name,
  storeName,
  category,
  photo,
  price,
  originalPrice,
  style,
  onPress,
  children,
  testID,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[$.container, style]}
    testID={testID}
  >
    <View>
      <RemoteImage
        style={$.image}
        source={{ uri: photo }}
      />
      <View>
        <Text style={$.title} numberOfLines={1}>{name}</Text>
        {price !== undefined &&
          <Text style={$.text}>
            {originalPrice ? null : `$${price}`}
            {originalPrice &&
              <>
                <Text style={$.priceSale}>${price}{' '}</Text>
                <Text style={$.priceOriginal}>${originalPrice}</Text>
              </>}
          </Text>}
        {price === undefined &&
          <>
            <Text style={$.text}>{category}</Text>
            <Text style={$.text}>Seller: {storeName}</Text>
          </>}
      </View>
    </View>
    {children}
  </TouchableOpacity>
)

export default ItemCard
