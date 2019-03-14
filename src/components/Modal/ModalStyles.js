import { StyleSheet } from 'react-native'
import {
  TEXT,
  TEXT_CAPTION,
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
    ...TEXT,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
  },
  caption: {
    ...TEXT_CAPTION,
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
    fontSize: 17,
    textAlign: 'center',
    color: '#087fff',
  },
  buttonTextBold: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600',
    color: '#087fff',
  },
})
