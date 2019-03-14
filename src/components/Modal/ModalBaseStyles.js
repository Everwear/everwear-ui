import { StyleSheet } from 'react-native'
import { BORDER_RADIUS } from '../../common/vars'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modal: {
    overflow: 'hidden',
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#f9f9f9',
    padding: 0,
    width: 270,
  },
})
