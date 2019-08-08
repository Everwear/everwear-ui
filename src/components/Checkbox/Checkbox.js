import React from 'react'
import { View, Image } from 'react-native'
import $ from './CheckboxStyles'

const Checkbox = ({
  checked,
  ...props
}) => (
  <View style={$.container} {...props}>
    {!checked &&
      <Image source={require('./img/checkbox_off.png')}/>}
    {checked &&
      <Image source={require('./img/checkbox_on.png')}/>}
  </View>
)

export default Checkbox
