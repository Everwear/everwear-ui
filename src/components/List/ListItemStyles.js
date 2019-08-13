import { StyleSheet } from 'react-native'
import { CLR_STORM_GREY, CLR_PINK } from '../../common/vars'

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 28,
  },
  containerLast: {
    marginBottom: 0,
  },
  num: {
    width: 28,
    fontSize: 20,
    fontFamily: 'WorkSans-SemiBold',
    lineHeight: 26,
    color: CLR_PINK,
  },
  text: {
    fontSize: 20,
    fontFamily: 'WorkSans-Regular',
    lineHeight: 26,
    color: CLR_STORM_GREY,
  },
})
