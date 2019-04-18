import React, { Component } from 'react'
import TextField from '../TextField/TextField'
import $ from './TextFieldAddressStyles'
import debounce from 'lodash/debounce'

import {
  View,
  Text,
  TouchableHighlight,
  Keyboard,
} from 'react-native'

const GOOGLE_MAPS_AUTOCOMPLETE_API_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
const GOOGLE_MAPS_PLACES_API_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/details/json?'

class TextFieldAddress extends Component {
  constructor(props) {
    super(props)
    this.fetchPlaces = debounce(this.fetchPlaces, 200)
    this.state = {
      value: '',
      predictions: [],
    }
  }

  onChange = (value) => {
    const { onChange } = this.props

    onChange(null)

    this.setState({
      value,
    })

    if (value.length > 2) {
      this.fetchPlaces(value)
    }
  }

  onSelect = async (place) => {
    const { apiKey, onChange } = this.props

    this.setState({
      value: place.description,
      predictions: [],
    })

    const url = `${GOOGLE_MAPS_PLACES_API_ENDPOINT}key=${apiKey}&placeid=${place.place_id}`

    const res = await fetch(url)
    const data = await res.json()

    onChange(data.result)
  }

  async fetchPlaces(value) {
    const { apiKey } = this.props

    let url = `${GOOGLE_MAPS_AUTOCOMPLETE_API_ENDPOINT}key=${apiKey}`
    url += '&components=country:us'
    url += `&input=${value}`
    url += '&types=geocode'

    const res = await fetch(url)
    const data = await res.json()

    this.setState({
      predictions: data.predictions,
    })
  }

  render () {
    const {
      style,
      autoFocus,
      placeholder,
    } = this.props

    const {
      value,
      predictions,
    } = this.state

    return (
      <View style={[$.container, style]}>
        <TextField
          style={$.input}
          autoCorrect={false}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChangeText={this.onChange}
          value={value}
        />
        <View style={$.list}>
          {predictions.map((item) =>
            <TouchableHighlight
              key={item.id}
              style={$.listItem}
              underlayColor="#dce0e3"
              onPress={() => {
                requestAnimationFrame(() => {
                  Keyboard.dismiss()
                  this.onSelect(item)
                })
              }}
            >
              <Text
                style={$.listItemText}
                numberOfLines={1}
              >
                {item.description}
              </Text>
            </TouchableHighlight>)}
        </View>
      </View>
    )
  }
}

export default TextFieldAddress
