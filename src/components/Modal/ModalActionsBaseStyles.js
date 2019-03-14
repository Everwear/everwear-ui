import { StyleSheet } from 'react-native'
import ModalStyles from './ModalStyles'
import {
  SPG_S,
  CLR_DIVIDER,
  BORDER_WIDTH,
} from '../../common/vars'

export default StyleSheet.flatten([ModalStyles, {
  buttons: {
    flexDirection: 'column',
  },
  button: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: CLR_DIVIDER,
    borderTopWidth: BORDER_WIDTH,
  },
  spinner: {
    marginTop: SPG_S,
  },
}])
