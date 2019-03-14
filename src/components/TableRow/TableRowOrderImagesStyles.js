import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: '#24253d',
  },
  statusActive: {
    color: '#0ebb89',
  },
  statusFailed: {
    color: '#da1856',
  },
  tags: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: '#8c90a0',
  },
  price: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    color: '#8c90a0',
  },
  images: {
    flexDirection: 'row',
    marginTop: 15,
  },
  image: {
    width: 55,
    height: 75,
    marginRight: 10,
  },
})
