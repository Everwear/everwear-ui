import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modal: {
    width: '100%',
    alignItems: 'center',
    zIndex: 2,
  },
  content: {
    width: '100%',
    paddingVertical: 40,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#fff',
  },
  bar: {
    width: 80,
    height: 6,
    marginBottom: 7,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
  },
  outside: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
