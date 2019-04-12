import { StyleSheet } from 'react-native'
import {
  TEXT_BASE,
  TEXT_FOOTNOTE,
} from '../../common/typography'

export default StyleSheet.create({
  logo: {
    marginVertical: 12,
  },
  content: {
    marginVertical: 12,
  },
  title: {
    ...TEXT_BASE,
    marginBottom: 4,
    marginRight: 16,
    color: '#100a50',
  },
  status: {
    ...TEXT_FOOTNOTE,
  },
  statusActive: {
    color: '#0ebb89',
  },
  statusFailed: {
    color: '#da1856',
  },
  arrow: {
    position: 'absolute',
    top: 27,
    right: 0,
    height: 13,
    width: 8,
  },
  images: {
    flexDirection: 'row',
    marginTop: 16,
  },
  imageWrap: {
    width: 40,
    height: 60,
    marginRight: 4,
  },
  imageOverlay: {
    zIndex: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  image: {
    width: 40,
    height: 60,
  },
})
