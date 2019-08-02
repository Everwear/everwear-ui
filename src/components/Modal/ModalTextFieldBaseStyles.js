import { StyleSheet } from 'react-native'
import { CLR_DARK_BLUE, BORDER_WIDTH } from '../../common/vars'
import ModalStyles from './ModalStyles'

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
    borderWidth: BORDER_WIDTH,
    borderColor: '#8e8e93',
    borderRadius: 5,
  },
}])
