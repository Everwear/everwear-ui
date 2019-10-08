import { StyleSheet } from 'react-native'
import { TEXT_SECONDARY } from '../../common/typography'
import {
  CLR_PINK,
  CLR_WHISPER,
  CLR_DARK_BLUE,
} from '../../common/vars'

export default StyleSheet.create({
  root: {
    maxHeight: 32,
    minHeight: 32,
  },
  content: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  toggle: {
    height: 32,
    marginHorizontal: 4,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CLR_WHISPER,
    borderRadius: 17,
  },
  toggleSelected: {
    backgroundColor: CLR_DARK_BLUE,
  },
  label: {
    ...TEXT_SECONDARY,
    color: CLR_DARK_BLUE,
    lineHeight: 32,
  },
  labelSelected: {
    color: CLR_PINK,
  },
})
