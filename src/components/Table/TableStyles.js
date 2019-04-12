import { StyleSheet } from 'react-native'
import {
  TEXT_VIBRATE,
  TEXT_FOOTNOTE,
} from '../../common/typography'

import {
  CLR_DIVIDER,
  BORDER_WIDTH,
} from '../../common/vars'

export default StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },
  header: {
    ...TEXT_VIBRATE,
    marginHorizontal: 20,
    marginBottom: 16,
    marginTop: 32,
  },
  footerWrap: {
    paddingTop: 8,
    marginHorizontal: 20,
    borderTopWidth: BORDER_WIDTH,
    borderTopColor: CLR_DIVIDER,
  },
  footer: {
    ...TEXT_FOOTNOTE,
  },
})
