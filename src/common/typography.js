import {
  FONT_FAMILY,
  FONT_SIZE_H1,
  FONT_SIZE_H2,
  FONT_SIZE_H3,
  FONT_SIZE_H4,
  FONT_SIZE_BASE,
  FONT_SIZE_SMALL,
  FONT_SIZE_CAPTION,
  FONT_SIZE_MICRO,
  CLR_TEXT_GREY,
  CLR_TEXT_BLACK,
} from './vars'

export const TEXT = {
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE_BASE,
  color: CLR_TEXT_BLACK,
  letterSpacing: -0.2,
  lineHeight: 24,
}

export const TEXT_SMALL = {
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE_SMALL,
  color: CLR_TEXT_GREY,
  lineHeight: 18,
}

export const TEXT_CAPTION = {
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE_CAPTION,
  color: CLR_TEXT_GREY,
  lineHeight: 16,
}

export const TEXT_MICRO = {
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE_MICRO,
  color: CLR_TEXT_GREY,
  lineHeight: 12,
}

export const H4 = {
  ...TEXT,
  fontSize: FONT_SIZE_H4,
  fontWeight: '600',
  lineHeight: 20,
}

export const H3 = {
  ...TEXT,
  lineHeight: 24,
  letterSpacing: 0,
  fontSize: FONT_SIZE_H3,
  fontWeight: '600',
}

export const H2 = {
  ...TEXT,
  lineHeight: 32,
  letterSpacing: 0,
  fontSize: FONT_SIZE_H2,
  fontWeight: '700',
}

export const H1 = {
  ...TEXT,
  lineHeight: 36,
  letterSpacing: 0,
  fontSize: FONT_SIZE_H1,
  fontWeight: '700',
}
