import { StyleSheet } from 'react-native'
import { CLR_PINK, CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bag: {

  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CLR_DARK_BLUE,
    borderRadius: 12,
    height: 24,
    width: 24,
  },
  count: {
    fontSize: 14,
    fontFamily: 'WorkSans-Bold',
    lineHeight: 18,
    color: CLR_PINK,
  },
})
