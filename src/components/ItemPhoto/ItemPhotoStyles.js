import { StyleSheet, Dimensions } from 'react-native'

export const CONTAINER_WIDTH = (Dimensions.get('window').width - 54) / 2
export const CONTAINER_HEIGHT = CONTAINER_WIDTH * 1.30

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
    alignItems: 'center',
  },
})
