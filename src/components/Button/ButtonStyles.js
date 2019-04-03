import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    zIndex: 1,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24253d',
    borderRadius: 12,
  },
  label: {
    lineHeight: 48,
    letterSpacing: 0.5,
    fontWeight: '700',
    fontSize: 14,
    color: '#fff',
  },
  disabledContainer: {
    zIndex: 0,
    // backgroundColor: null,
    // borderColor: CLR_DIVIDER,
  },
  disabledLabel: {
    // color: CLR_TEXT_GREY,
  },
  greenContainer: {
    // backgroundColor: CLR_GREEN,
  },
  greenLabel: {
    // color: '#fff',
  },
  purpleContainer: {
    // backgroundColor: CLR_PURPLE,
    borderWidth: 0,
  },
  purpleLabel: {
    // color: '#fff',
  },
  selectedContainer: {
    // backgroundColor: CLR_LIGHTER_PURPLE,
    zIndex: 10,
  },
  smallContainer: {
    borderRadius: 6,
    height: 40,
  },
  smallLabel: {
    fontWeight: '400',
    lineHeight: 38,
  },
})
