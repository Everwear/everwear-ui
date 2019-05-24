import { StyleSheet } from 'react-native'
import { CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    width: '100%',
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
})
