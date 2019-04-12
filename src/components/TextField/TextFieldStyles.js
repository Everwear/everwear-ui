import { StyleSheet } from 'react-native'
import { TEXT_FOOTNOTE } from '../../common/typography'

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    alignSelf: 'center',
  },
  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e2e8',
  },
  inputWrapFocus: {
    borderBottomColor: '#4c73ff',
  },
  input: {
    flex: 1,
    height: 43,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: '#100a50',
  },
  hint: {
    ...TEXT_FOOTNOTE,
    marginTop: 8,
  },
})
