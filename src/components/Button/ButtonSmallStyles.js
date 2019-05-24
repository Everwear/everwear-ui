import { StyleSheet } from 'react-native'
import { CLR_WHISPER } from '../../common/vars'

export default StyleSheet.create({
  container: {
    height: 32,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CLR_WHISPER,
    borderRadius: 16,
  },
  label: {
    lineHeight: 32,
    color: '#4c73ff',
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 16,
  },
  disabledContainer: {
    backgroundColor: null,
  },
})
