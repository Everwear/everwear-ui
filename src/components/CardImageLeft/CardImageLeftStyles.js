import { StyleSheet } from 'react-native'
import { TEXT_BASE_BOLD } from '../../common/typography'
import { CLR_DARK_BLUE, CLR_WHISPER } from '../../common/vars'

export default StyleSheet.create({
  root: {
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: CLR_WHISPER,
    borderRadius: 8,
  },
  content: {
    justifyContent: 'center',
  },
  image: {
    marginRight: 20,
  },
  text: {
    ...TEXT_BASE_BOLD,
    color: CLR_DARK_BLUE,
  },
})
