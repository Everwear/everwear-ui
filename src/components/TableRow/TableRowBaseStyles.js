import { StyleSheet } from 'react-native'
import { CLR_DIVIDER, BORDER_WIDTH } from '../../common/vars'

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: -BORDER_WIDTH,
  },
  containerFirst: {
    marginTop: 0,
  },
  content: {
    marginLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  contentTopSep: {
    borderTopColor: CLR_DIVIDER,
    borderTopWidth: BORDER_WIDTH,
  },
  contentBottomSep: {
    borderBottomColor: CLR_DIVIDER,
    borderBottomWidth: BORDER_WIDTH,
  },
  image: {
    marginRight: 15,
    marginVertical: 15,
  },
  imageView: {
    marginRight: 15,
    marginVertical: 15,
  },
  wrap: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 15,
    height: '100%',
  },
})
