import { StyleSheet } from 'react-native'
import { TEXT_SECONDARY } from '../../common/typography'

export default StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...TEXT_SECONDARY,
    fontFamily: 'WorkSans-SemiBold',
    textAlign: 'center',
    color: '#fff',
  },
})
