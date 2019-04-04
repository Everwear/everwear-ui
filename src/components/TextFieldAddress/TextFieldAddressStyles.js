import { StyleSheet } from 'react-native'
import {
  CLR_DIVIDER,
  BORDER_WIDTH,
} from '../../common/vars'

export default StyleSheet.create({
  container: {
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
    left: 0,
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 8,
    },
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: CLR_DIVIDER,
    borderTopWidth: BORDER_WIDTH,
  },
  listItemText: {
    fontSize: 18,
    color: '#000',
  },
})
