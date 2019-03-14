import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.5,
    color: '#8c90a0',
  },
  textValue: {
    fontSize: 14,
    lineHeight: 20,
    color: '#24253d',
  },
  textCaption: {
    marginTop: 3,
    fontSize: 14,
    lineHeight: 20,
    color: '#24253d',
  },
})
