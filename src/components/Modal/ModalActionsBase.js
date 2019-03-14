import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import RemoteImage from '../RemoteImage/RemoteImage'
import $ from './ModalActionsBaseStyles'

export default ({
  text,
  caption,
  buttons,
  testID,
  testIDText,
  testIDTextCaption,
  image,
}) => (
  <View>
    <View testID={testID} style={$.content}>
      {image &&
        <RemoteImage
          source={image}
          style={$.image}
        />}
      <Text testID={testIDText} style={$.text}>
        {text}
      </Text>
      {caption &&
        <Text testID={testIDTextCaption} style={$.caption}>
          {caption}
        </Text>}
    </View>
    <View style={$.buttons}>
      {buttons.map((button, i) =>
        <TouchableHighlight
          key={i}
          style={$.button}
          underlayColor="#dce0e3"
          onPress={() => {
            requestAnimationFrame(() => {
              button.onPress()
            })
          }}
        >
          <Text testID={`btn_${button.text}`} style={[$.buttonText, button.style]}>
            {button.text}
          </Text>
        </TouchableHighlight>)}
    </View>
  </View>
)
