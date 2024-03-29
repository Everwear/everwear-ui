import { StyleSheet } from 'react-native'
import { TEXT_BASE } from '../../common/typography'
import { CLR_WHISPER, CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    height: 48,
    paddingLeft: 24,
    paddingRight: 36,
    borderRadius: 24,
    backgroundColor: CLR_WHISPER,
    justifyContent: 'center',
  },
  wrap: {
    width: '100%',
  },
  text: {
    ...TEXT_BASE,
    color: CLR_DARK_BLUE,
  },
  arrow: {
    position: 'absolute',
    right: 21,
    top: 21,
    width: 13,
    height: 9,
    resizeMode: 'contain',
  }
})
