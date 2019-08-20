import { StyleSheet, Dimensions } from 'react-native'
import { CLR_WHISPER } from '../../common/vars'

export const CONTAINER_WIDTH = (Dimensions.get('window').width - 54) / 2
export const CONTAINER_HEIGHT = CONTAINER_WIDTH * 1.30

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: CLR_WHISPER,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
})
