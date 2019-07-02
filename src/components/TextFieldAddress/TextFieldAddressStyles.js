import { StyleSheet } from 'react-native'
import { CLR_DARK_BLUE, CLR_DIVIDER, BORDER_WIDTH } from '../../common/vars'
import { TEXT_BASE } from '../../common/typography'

export default StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 100,
  },
  input: {
    width: '100%',
    marginLeft: null,
    marginRight: null,
    marginBottom: null,
  },
  list: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    top: '100%',
    backgroundColor: '#fff',
  },
  listItem: {
    paddingVertical: 10,
    borderTopColor: CLR_DIVIDER,
    borderTopWidth: BORDER_WIDTH,
  },
  listItemText: {
    ...TEXT_BASE,
    color: CLR_DARK_BLUE,
  },
})
