import { StyleSheet } from 'react-native'
import { statusBarHeight } from '../../common/utils'

export default StyleSheet.create({
  gallery: {
    flex: 1,
    backgroundColor: 'black',
  },
  close: {
    position: 'absolute',
    top: statusBarHeight() + 6,
    right: 20,
    zIndex: 1,
  },
  image: {
    width: 300,
    height: 400,
  },
})
