import { StyleSheet } from 'react-native'
import { TEXT_FOOTNOTE } from '../../common/typography'
import { CLR_DIVIDER, CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: CLR_DIVIDER,
  },
  inputWrapFocus: {
    borderBottomColor: '#4c73ff',
  },
  number: {
    flex: 1,
    height: 43,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: CLR_DARK_BLUE,
  },
  expiry: {
    width: 70,
    height: 43,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: CLR_DARK_BLUE,
  },
  cvv: {
    width: 50,
    height: 43,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: CLR_DARK_BLUE,
  },
  zip: {
    height: 43,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    color: CLR_DARK_BLUE,
  },
  hint: {
    ...TEXT_FOOTNOTE,
    marginTop: 8,
  },
})
