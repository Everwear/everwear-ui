import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#8c90a0',
    zIndex: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 36,
    fontSize: 18,
    color: '#24253d',
  },
  hint: {
    marginTop: 3,
    fontSize: 12,
    color: '#8c90a0',
  },
  focused: {
    borderColor: '#24253d',
  }
})
