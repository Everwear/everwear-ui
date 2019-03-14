import { StyleSheet } from 'react-native'
import ModalStyles from './ModalStyles'
import {
  SPG_S,
  SPG_XS,
  FONT_FAMILY,
  FONT_SIZE_SMALL,
} from '../../common/vars'

export default StyleSheet.flatten([ModalStyles, {
  spinner: {
    marginTop: SPG_S,
  },
  input: {
    marginTop: SPG_S,
    paddingHorizontal: SPG_XS,
    width: '100%',
    height: 30,
    backgroundColor: '#fff',
    borderColor: '#979797',
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_SMALL,
  },
}])
