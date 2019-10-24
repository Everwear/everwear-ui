import { StyleSheet } from 'react-native'
import { TEXT_BASE } from '../../common/typography'
import { CLR_BOMBAY } from '../../common/vars'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  text: {
    ...TEXT_BASE,
    marginTop: 32,
    textAlign: 'center',
    color: CLR_BOMBAY,
  },
  image: {
    resizeMode: 'contain',
  },
})
