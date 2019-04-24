import { StyleSheet } from 'react-native'
import {
  TEXT_BASE,
  TEXT_BASE_MEDIUM,
} from '../../common/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 32,
  },
  title: {
    ...TEXT_BASE_MEDIUM,
    marginBottom: 8,
    color: '#100a50',
  },
  size: {
    ...TEXT_BASE,
    marginBottom: 8,
  },
  price: {
    ...TEXT_BASE_MEDIUM,
    color: '#100a50',
  },
  status: {
    ...TEXT_BASE,
    color: '#100a50',
  },
  statusReturned: {
    color: '#fc6e51',
  },
  imageWrap: {
    width: 60,
    height: 92,
    marginVertical: 12,
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
    width: 60,
    height: 92,
  },
})
