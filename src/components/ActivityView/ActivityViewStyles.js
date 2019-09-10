import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: -60,
    marginLeft: -60,
    height: 120,
    width: 120,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 24,
  },
})
