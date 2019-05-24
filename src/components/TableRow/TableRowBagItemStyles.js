import { StyleSheet } from 'react-native'
import {
  TEXT_BASE, TEXT_SECONDARY,
} from '../../common/typography'
import {
  CLR_DARK_BLUE,
} from '../../common/vars'

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
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,

  },
  price: {
    ...TEXT_BASE,
    lineHeight: 21,
  },
  label: {
    ...TEXT_SECONDARY,
    marginLeft: 5,
    lineHeight: 21,
  },
  qty: {
    flex: 1,
    marginRight: 2,
  },
  size: {
    flex: 1,
    marginLeft: 2,
  },
})
