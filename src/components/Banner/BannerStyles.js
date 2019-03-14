import { StyleSheet } from 'react-native'
import { CLR_DIVIDER, BORDER_WIDTH } from '../../common/vars'

export default StyleSheet.create({
  container: {
    padding: 30,
    borderTopWidth: BORDER_WIDTH,
    borderBottomWidth: BORDER_WIDTH,
    borderTopColor: CLR_DIVIDER,
    borderBottomColor: CLR_DIVIDER,
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  cross: {
    width: 14,
    height: 14,
  },
})
