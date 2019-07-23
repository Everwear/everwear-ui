import { StyleSheet } from 'react-native'
import { TEXT_BASE, TEXT_SECONDARY, TEXT_FOOTNOTE } from '../../common/typography'
import { CLR_DARK_BLUE } from '../../common/vars'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
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
    width: 100,
    height: 128,
    borderRadius: 8,
  },
  title: {
    ...TEXT_BASE,
    color: CLR_DARK_BLUE,
  },
  row: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    ...TEXT_BASE,
  },
  text: {
    ...TEXT_BASE,
    marginRight: 10,
  },
  label: {
    ...TEXT_FOOTNOTE,
    lineHeight: 21,
    marginLeft: 5,
  },
  qty: {
    width: '50%',
  },
  size: {
    ...TEXT_BASE,
    paddingLeft: 8,
    color: CLR_DARK_BLUE,
    width: '50%',
  },
})
