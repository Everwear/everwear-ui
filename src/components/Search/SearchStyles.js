import { StyleSheet } from 'react-native'
import { CLR_WHISPER, CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  input: {
    flex: 1,
    height: 32,
    paddingVertical: 0,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: -0.2,
    backgroundColor: CLR_WHISPER,
    borderRadius: 16,
    color: CLR_DARK_BLUE,
  },
})
