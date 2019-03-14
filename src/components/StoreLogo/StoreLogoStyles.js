import { StyleSheet } from 'react-native'
import { CLR_DIVIDER, BORDER_WIDTH } from '../../common/vars'

export default StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: BORDER_WIDTH,
    borderColor: CLR_DIVIDER,
  },
  logo: {
    width: 30,
    height: 30,
  },
})
