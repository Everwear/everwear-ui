import { StyleSheet } from 'react-native'
import { CLR_DARK_BLUE, CLR_BOMBAY } from '../../common/vars'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 24,
    width: '100%',
  },
  tabWrap: {
    width: 100,
    alignItems: 'center',
  },
  tabSelected: {
    borderBottomWidth: 2,
    borderBottomColor: CLR_DARK_BLUE,
  },
  text: {
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    lineHeight: 21,
    color: CLR_DARK_BLUE,
  },
  textDisabled: {
    color: CLR_BOMBAY,
  },
})
