import { Dimensions, StyleSheet } from 'react-native'
import { TEXT_VIBRATE } from '../../common/typography'

const CARD_WIDTH = Dimensions.get('window').width - 40
const CARD_HEIGHT = (CARD_WIDTH - 14) / 2 * 1.25

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: CARD_WIDTH,
    marginHorizontal: 7,
    marginBottom: 14,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 8,
  },
  title: {
    ...TEXT_VIBRATE,
    position: 'absolute',
    width: '100%',
    bottom: 24,
    color: '#fff',
    textAlign: 'center',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
      width: 0,
    },
  },
})
