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
  containerBig: {
    width: 65,
    height: 65,
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoBig: {
    width: 40,
    height: 40,
  },
})
