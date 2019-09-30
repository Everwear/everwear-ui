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
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 20,
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
    marginVertical: 12,
    alignSelf: 'center',
  },
  imageView: {
    marginRight: 15,
    marginVertical: 12,
    alignSelf: 'center',
  },
  wrap: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    height: '100%',
  },
  wrapTopSep: {
    borderTopColor: CLR_DIVIDER,
    borderTopWidth: BORDER_WIDTH,
  },
  wrapBottomSep: {
    borderBottomColor: CLR_DIVIDER,
    borderBottomWidth: BORDER_WIDTH,
  },
  footer: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
  swipeoutWrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
