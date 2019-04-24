import { StyleSheet } from 'react-native'
import {
  TEXT_BASE,
  TEXT_BASE_MEDIUM,
  TEXT_VIBRANT,
} from '../../common/typography'

import {
  SPG_S,
  SPG_XS,
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
    marginBottom: SPG_S,
    borderRadius: BORDER_RADIUS,
    resizeMode: 'contain',
  },
  text: {
    ...TEXT_VIBRANT,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
  },
  caption: {
    ...TEXT_BASE,
    marginTop: SPG_XS,
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
    ...TEXT_BASE_MEDIUM,
    textAlign: 'center',
    color: '#087fff',
  },
})
