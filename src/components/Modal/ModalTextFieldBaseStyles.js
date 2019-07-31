import { StyleSheet } from 'react-native'
import ModalStyles from './ModalStyles'
import { CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.flatten([ModalStyles, {
  input: {
    marginTop: 16,
    paddingHorizontal: 10,
    height: 42,
    width: '100%',
    fontSize: 16,
    color: CLR_DARK_BLUE,
    fontFamily: 'WorkSans-Regular',
    backgroundColor: '#fff',
    borderColor: '#979797',
    borderRadius: 5,
    borderWidth: 1,
  },
}])
