import { StyleSheet } from 'react-native'
import { CLR_DARK_BLUE, CLR_PINK } from '../../common/vars'

export default StyleSheet.create({
  container: {
    height: 32,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CLR_DARK_BLUE,
    borderRadius: 16,
  },
  label: {
    lineHeight: 32,
    color: CLR_PINK,
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 13,
  },
})
