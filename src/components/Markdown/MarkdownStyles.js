import { StyleSheet } from 'react-native'
import {
  TEXT_BASE,
  TEXT_BASE_BOLD,
} from '../../common/typography'
import {
  CLR_BLUE,
  CLR_DARK_BLUE,
} from '../../common/vars'

export default StyleSheet.create({
  text: {
    ...TEXT_BASE,
    color: CLR_DARK_BLUE,
  },
  strong: {
    ...TEXT_BASE_BOLD,
    color: CLR_DARK_BLUE,
  },
  link: {
    ...TEXT_BASE,
    color: CLR_BLUE,
  },
})
