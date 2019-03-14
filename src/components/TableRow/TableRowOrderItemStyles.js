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
  title: {
    marginBottom: 4,
    color: '#24253d',
    lineHeight: 20,
    fontWeight: '600',
    fontSize: 14,
  },
  status: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.5,
    color: '#24253d',
  },
  statusReturned: {
    color: '#0ebb89',
  },
  tags: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 0.5,
    color: '#8c90a0',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.5,
    color: '#8c90a0',
  },
  image: {
    width: 55,
    height: 75,
    resizeMode: 'contain',
  },
})
