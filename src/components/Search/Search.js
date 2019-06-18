import React from 'react'
import { TextInput } from 'react-native'
import { CLR_MANATEE } from '../../common/vars'
import $ from './SearchStyles'

const Search = ({
  style,
  ...props,
}) => {
  return (
    <TextInput
      {...props}
      style={[$.input, style]}
      placeholderTextColor={CLR_MANATEE}
      returnKeyType="search"
    />
  )
}

export default Search
