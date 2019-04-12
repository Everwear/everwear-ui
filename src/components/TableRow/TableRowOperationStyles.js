import { StyleSheet } from 'react-native'
import {
  TEXT_BASE,
  TEXT_SECONDARY,
} from '../../common/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  store: {
    ...TEXT_BASE,
    color: '#100a50',
  },
  amount: {
    ...TEXT_BASE,
    color: '#19d87c',
  },
  text: {
    ...TEXT_SECONDARY,
  },
})
