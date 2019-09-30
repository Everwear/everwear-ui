import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    paddingBottom: 20,
  },
  buttonWrap: {
    position: 'absolute',
    zIndex: 100,
    bottom: 36,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    minWidth: 195,
    maxWidth: 240,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: {
      height: 8,
      width: 0,
    },
  },
  kbaView: {
    flex: 1,
  },
})
