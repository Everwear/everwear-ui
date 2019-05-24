import { StyleSheet } from 'react-native'
import { CLR_DARK_BLUE } from '../../common/vars'
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
    color: CLR_DARK_BLUE,
  },
  amount: {
    ...TEXT_BASE,
    color: '#19d87c',
  },
  text: {
    ...TEXT_SECONDARY,
  },
})
