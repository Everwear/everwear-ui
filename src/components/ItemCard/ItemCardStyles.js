import { Dimensions, StyleSheet } from 'react-native'
import { TEXT_FOOTNOTE } from '../../common/typography'
import {
  CLR_DARK_BLUE,
  CLR_WHISPER,
  CLR_ORANGE,
  CLR_MANATEE,
} from '../../common/vars'

const IMAGE_WIDTH = (Dimensions.get('window').width - 54) / 2
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.30

export default StyleSheet.create({
  container: {
    width: IMAGE_WIDTH,
    overflow: 'hidden',
    marginHorizontal: 7,
    marginBottom: 16,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: CLR_WHISPER,
  },
  title: {
    ...TEXT_FOOTNOTE,
    color: CLR_DARK_BLUE,
  },
  text: {
    ...TEXT_FOOTNOTE,
  },
  priceSale: {
    color: CLR_ORANGE,
  },
  priceOriginal: {
    textDecorationLine: 'line-through',
    color: CLR_MANATEE,
  },
})
