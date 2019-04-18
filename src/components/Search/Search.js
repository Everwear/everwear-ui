import React from 'react'
import { TextInput } from 'react-native'
import $ from './SearchStyles'

const Search = ({
  style,
  ...props,
}) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#8d90a1"
      style={[$.input, style]}
    />
  )
}

export default Search
