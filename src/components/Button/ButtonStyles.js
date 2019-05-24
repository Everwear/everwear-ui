import { StyleSheet } from 'react-native'
import { CLR_PINK, CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CLR_DARK_BLUE,
    borderRadius: 24,
  },
  label: {
    lineHeight: 48,
    color: CLR_PINK,
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 16,
  },
  disabledContainer: {
    backgroundColor: null,
  },
})
