import { StyleSheet } from 'react-native'
import { SPG_S } from '../../common/vars'
import ModalStyles from './ModalStyles'

export default StyleSheet.flatten([ModalStyles, {
  spinner: {
    marginTop: SPG_S,
  },
}])
