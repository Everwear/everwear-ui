import React from 'react'
import { View } from 'react-native'
// import M from 'react-native-markdown-renderer'
import $ from './MarkdownStyles'

const Markdown = ({
  style,
  children,
}) => (
  <View style={style}>
    <M style={$}>
      {children}
    </M>
  </View>
)

export default Markdown
