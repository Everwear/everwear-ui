import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ItemPhoto from '../ItemPhoto/ItemPhoto'
import { _00 } from '../../common/utils'
import $ from './ItemCardStyles'

const ItemCard = ({
  name,
  storeName,
  category,
  photo,
  price,
  ratio,
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
      <ItemPhoto
        style={$.image}
        ratio={ratio}
        source={{
          uri: photo,
          cache: 'force-cache',
        }}
        resizeMode="contain"
      />
      <View>
        <Text style={$.title} numberOfLines={1}>{name}</Text>
        {price !== undefined &&
          <Text style={$.text}>
            {originalPrice ? null : `$${price}`}
            {originalPrice &&
              <>
                <Text style={$.priceSale}>${_00(price)}{' '}</Text>
                <Text style={$.priceOriginal}>${_00(originalPrice)}</Text>
              </>}
          </Text>}
        {price === undefined &&
          <>
            <Text style={$.text}>{category}</Text>
            {storeName &&
              <Text style={$.text}>Seller: {storeName}</Text>}
          </>}
      </View>
    </View>
    {children}
  </TouchableOpacity>
)

export default ItemCard
