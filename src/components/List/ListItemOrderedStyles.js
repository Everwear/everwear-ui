import { StyleSheet } from 'react-native'
import { TEXT_BASE } from '../../common/typography'
import { BORDER_WIDTH, CLR_DIVIDER } from '../../common/vars'

export default StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    borderBottomWidth: BORDER_WIDTH,
    borderBottomColor: CLR_DIVIDER,
  },
  containerLast: {
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  num: {
    ...TEXT_BASE,
    color: '#afb1b8',
    width: 25,
  },
  text: {
    ...TEXT_BASE,
  },
})
