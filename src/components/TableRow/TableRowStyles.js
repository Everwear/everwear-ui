import { StyleSheet } from 'react-native'
import {
  TEXT_BASE,
  TEXT_SECONDARY,
} from '../../common/typography'

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
    ...TEXT_BASE,
    color: '#100a50',
  },
  textValue: {
    ...TEXT_BASE,
  },
  textLabel: {
    ...TEXT_BASE,
  },
  textCaption: {
    ...TEXT_SECONDARY,
  },
})
