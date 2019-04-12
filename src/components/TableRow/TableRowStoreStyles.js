import { StyleSheet } from 'react-native'
import { TEXT_BASE } from '../../common/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    ...TEXT_BASE,
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.5,
    color: '#0ebb89',
  },
  add: {
    alignSelf: 'center',
  },
})
