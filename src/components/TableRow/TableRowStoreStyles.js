import { StyleSheet } from 'react-native'
import { TEXT_BASE } from '../../common/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    ...TEXT_BASE,
    color: '#100a50',
  },
  authorized: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'WorkSans-SemiBold',
    color: '#19d87c',
  },
  add: {
    alignSelf: 'center',
  },
  arrow: {
    width: 7,
    height: 12,
    alignSelf: 'center',
  },
})
