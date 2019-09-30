import { StyleSheet } from 'react-native'

import {
  TEXT_BASE,
  TEXT_BASE_BOLD,
  TEXT_FOOTNOTE,
} from '../../common/typography'

import {
  CLR_WHISPER,
  CLR_DARK_BLUE,
  CLR_ORANGE,
  CLR_MANATEE,
  CLR_RED,
} from '../../common/vars'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  imageView: {
    alignSelf: 'flex-start',
  },
  imageWrap: {
    width: 100,
    height: 128,
  },
  image: {
    borderRadius: 8,
    backgroundColor: CLR_WHISPER,
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
    width: '100%',
  },
  priceSale: {
    color: CLR_ORANGE,
  },
  priceOriginal: {
    textDecorationLine: 'line-through',
    color: CLR_MANATEE,
  },
  text: {
    ...TEXT_BASE,
    marginRight: 10,
  },
  label: {
    ...TEXT_FOOTNOTE,
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
  delete: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: CLR_RED,
  },
  deleteText: {
    ...TEXT_BASE_BOLD,
    color: '#fff',
  },
})
