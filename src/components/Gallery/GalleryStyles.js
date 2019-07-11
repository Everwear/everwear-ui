import { StyleSheet } from 'react-native'
import { statusBarHeight } from '../../common/utils'

export default StyleSheet.create({
  gallery: {
    flex: 1,
    backgroundColor: '#fff',
  },
  close: {
    position: 'absolute',
    top: statusBarHeight() + 6,
    left: 20,
    zIndex: 1,
  },
  content: {
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 400,
  },
})
