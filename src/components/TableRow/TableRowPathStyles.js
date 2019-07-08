import { StyleSheet } from 'react-native'
import { TEXT_BASE_BOLD } from '../../common/typography'
import {
  CLR_ORANGE,
  CLR_STORM_GREY,
  CLR_DARK_BLUE,
  CLR_DIVIDER
} from '../../common/vars'

export default StyleSheet.create({
  container: {
    width: 11,
    height: '100%',
    marginVertical: 0,
  },
  circle: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: -6,
    marginLeft: -6,
    width: 11,
    height: 11,
    backgroundColor: CLR_DIVIDER,
    borderRadius: 6,
  },
  circleCurrent: {
    backgroundColor: CLR_ORANGE,
  },
  line: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    marginLeft: -1,
    width: 1,
    backgroundColor: CLR_DIVIDER,
  },
  lineFirst: {
    top: '50%',
  },
  lineLast: {
    bottom: '50%',
  },
  linePassed: {
    backgroundColor: CLR_ORANGE,
  },
  lineCurrent: {
    backgroundColor: CLR_ORANGE,
    bottom: '50%',
  },
  text: {
    color: CLR_STORM_GREY,
  },
  textCurrent: {
    ...TEXT_BASE_BOLD,
    color: CLR_DARK_BLUE,
  },
})
