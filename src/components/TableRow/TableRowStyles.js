import { StyleSheet } from 'react-native'
import { CLR_DARK_BLUE } from '../../common/vars'
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
    color: CLR_DARK_BLUE,
  },
  textValue: {
    ...TEXT_BASE,
    maxWidth: '50%',
  },
  textLabel: {
    ...TEXT_BASE,
  },
  textCaption: {
    ...TEXT_SECONDARY,
  },
  info: {
    marginLeft: 8,
    height: 24,
    width: 24,
  },
})
