import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    marginBottom: 4,
    color: '#24253d',
    lineHeight: 20,
    fontWeight: '700',
    fontSize: 16,
  },
  status: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.5,
    color: '#8c90a0',
  },
  statusActive: {
    color: '#0ebb89',
  },
  statusProcessing: {
    color: '#f2994a',
  },
})
