import React from 'react'
import { TextInput } from 'react-native'
import { CLR_MANATEE } from '../../common/vars'
import $ from './SearchStyles'

const Search = React.forwardRef(({
  style,
  ...props,
}, ref) => (
  <TextInput
    {...props}
    style={[$.input, style]}
    placeholderTextColor={CLR_MANATEE}
    clearButtonMode="always"
    returnKeyType="search"
    ref={ref}
  />
))

export default Search
