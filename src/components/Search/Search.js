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
      placeholderTextColor={CLR_MANATEE}
      style={[$.input, style]}
    />
  )
}

export default Search
