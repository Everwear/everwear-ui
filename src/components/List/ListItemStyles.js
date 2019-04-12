import { StyleSheet } from 'react-native'
import { TEXT_BASE } from '../../common/typography'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  containerLast: {
    marginBottom: 0,
  },
  dot: {
    width: 7,
    height: 7,
    marginTop: 7,
    marginRight: 14,
    backgroundColor: '#f9cec6',
    borderRadius: 4,
  },
  text: {
    ...TEXT_BASE,
  },
})
