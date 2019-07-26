import { StyleSheet } from 'react-native'
import { TEXT_BASE, TEXT_SECONDARY, TEXT_FOOTNOTE } from '../../common/typography'
import { CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  inactive: {
    opacity: 0.3,
  },
  imageWrap: {
    width: 100,
    height: 128,
  },
  imageOverlay: {
    zIndex: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 8,
  },
  image: {
    borderRadius: 8,
  },
  title: {
    ...TEXT_BASE,
    marginBottom: 8,
    color: CLR_DARK_BLUE,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  price: {
    ...TEXT_BASE,
    lineHeight: 21,
  },
  status: {
    ...TEXT_FOOTNOTE,
    lineHeight: 21,
    marginLeft: 5,
  },
  params: {
    ...TEXT_BASE,
  },
  otherItems: {
    flexDirection: 'row',
  },
  otherItem: {
    marginRight: 12,
    borderRadius: 4,
    height: 66,
    width: 52,
  },
  otherItemUnavailable: {
    opacity: 0.3,
  },
})
