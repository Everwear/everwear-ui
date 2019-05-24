import { StyleSheet } from 'react-native'
import { CLR_PINK, CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: CLR_DARK_BLUE,
    borderRadius: 30,
  },
  text: {
    lineHeight: 18,
    color: CLR_PINK,
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 16,
  },
  label: {
    marginTop: 2,
    lineHeight: 14,
    color: CLR_PINK,
    fontFamily: 'WorkSans-Regular',
    fontSize: 11,
  },
})
