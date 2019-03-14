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
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: {
      height: -3,
      width: 0,
    },
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  kbaView: {
    flex: 1,
  },
})
