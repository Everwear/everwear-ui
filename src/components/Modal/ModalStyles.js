import { StyleSheet } from 'react-native'
import {
  TEXT_BASE,
  TEXT_BASE_BOLD,
  TEXT_VIBRATE,
} from '../../common/typography'

import {
  BORDER_WIDTH,
  BORDER_RADIUS,
  CLR_DIVIDER,
} from '../../common/vars'

export default StyleSheet.create({
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 44,
    height: 44,
    marginBottom: 16,
    borderRadius: BORDER_RADIUS,
    resizeMode: 'contain',
  },
  text: {
    ...TEXT_VIBRATE,
    textAlign: 'center',
    color: '#000',
  },
  caption: {
    ...TEXT_BASE,
    marginTop: 8,
    textAlign: 'center',
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopColor: CLR_DIVIDER,
    borderTopWidth: BORDER_WIDTH,
  },
  button: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSep: {
    borderRightColor: CLR_DIVIDER,
    borderRightWidth: BORDER_WIDTH,
  },
  buttonText: {
    ...TEXT_BASE,
    textAlign: 'center',
    color: '#087fff',
  },
  buttonTextBold: {
    ...TEXT_BASE_BOLD,
    textAlign: 'center',
    color: '#087fff',
  },
})
