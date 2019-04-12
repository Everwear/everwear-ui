import { Platform, StyleSheet } from 'react-native'

export const SPG_XS = 8
export const SPG_S = SPG_XS * 2
export const SPG_M = SPG_XS * 3
export const SPG_L = SPG_XS * 4
export const SPG_XL = SPG_XS * 6
export const SPG_XXL = SPG_XS * 8

export const CLR_GREEN = '#31bda8'
export const CLR_PURPLE = '#6554ca'
export const CLR_LIGHT_PURPLE = '#aa9bf5'
export const CLR_LIGHTER_PURPLE = '#d7ceff'
export const CLR_GREY = '#e8e8e8'
export const CLR_DARK_GREY = '#8a8a8f'
export const CLR_LIGHT_GREY = '#eceeee'
export const CLR_RED = '#ff3b30'
export const CLR_ORANGE = '#ffa600'
export const CLR_DIVIDER = '#c8cccf'
export const CLR_TEXT_GREY = '#8a8a8f'
export const CLR_TEXT_BLACK = '#000'
export const CLR_TEXT_RED = '#ff3b30'
export const CLR_TEXT_PURPLE = '#6554ca'
export const CLR_TEXT_ORANGE = '#fc6d0e'
export const CLR_TEXT_CORAL = '#ff8c98'
export const CLR_TEXT_DISABLED = '#ccc'
export const CLR_SCREEN_BG = '#f7f9fa'

export const FONT_FAMILY = Platform.OS === 'sketch' ? 'SF Pro Text' : Platform.OS === 'ios' ? 'System' : 'WorkSans'
export const FONT_SIZE_H1 = 34
export const FONT_SIZE_H2 = 28
export const FONT_SIZE_H3 = 20
export const FONT_SIZE_H4 = 16
export const FONT_SIZE_BASE = 16
export const FONT_SIZE_SMALL = 15
export const FONT_SIZE_CAPTION = 13
export const FONT_SIZE_MICRO = 11

export const BORDER_RADIUS = 8
export const BORDER_WIDTH = StyleSheet.hairlineWidth
