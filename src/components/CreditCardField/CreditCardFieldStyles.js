import { StyleSheet } from 'react-native'
import { TEXT_FOOTNOTE } from '../../common/typography'

export default StyleSheet.create({
  container: {
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
  number: {
    flex: 1,
    height: 43,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: '#100a50',
  },
  expiry: {
    width: 70,
    height: 43,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: '#100a50',
  },
  cvv: {
    width: 50,
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