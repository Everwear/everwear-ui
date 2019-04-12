import { StyleSheet } from 'react-native'
import { CLR_DIVIDER, BORDER_WIDTH } from '../../common/vars'

export default StyleSheet.create({
  container: {
    width: 62,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: CLR_DIVIDER,
    borderWidth: BORDER_WIDTH,
    borderRadius: 8,
  },
  logo: {
    width: '70%',
    height: '70%',
  },
})
