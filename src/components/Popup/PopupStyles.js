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
  },
  content: {
    width: '100%',
    paddingVertical: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
  },
  bar: {
    width: 80,
    height: 6,
    marginBottom: 12,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
})
