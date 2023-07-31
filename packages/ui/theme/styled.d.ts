import { FlattenSimpleInterpolation } from 'styled-components'

declare module 'styled-components' {
  export type BreakPoints = {
    XXS: number
    XS: number
    SM: number
    MD: number
    LG: number
  }

  export interface DefaultTheme {
    COLOR: {
      RED: string,
      CORAL: string,
      DARKYELLOW: string,
      LIGHTYELLOW: string,
      SALMON: string,
      SALMON_20: string,
      SALMON_60: string,
      MELON: string,
      BLUE: string,
      LIGHTBLUE: string,
      WHITE: string,
      BLACK: string,
      LIGHTGREY: string,
      MEDIUMGREY: string,
      GREY: string,
      GREY_40: string,
      GREY_60: string,
      GREY_80: string,
      WHITE_TRANSPARENT: string,
      BLACK_TRANSPARENT: string
    },
    FONT: {
      FONT_PRIMARY: string
    },
    TYPOGRAPHY: {
      H1: FlattenSimpleInterpolation
      H2: FlattenSimpleInterpolation
      H3: FlattenSimpleInterpolation
      H4: FlattenSimpleInterpolation
      BODY: FlattenSimpleInterpolation
      BODYBOLD: FlattenSimpleInterpolation
      BODYSMALL: FlattenSimpleInterpolation
      LINK: FlattenSimpleInterpolation
    },
    LAYOUT: {
      MAX_CONTAINER_WIDTH: number
      GRID_COLUMNS: number
      BREAKPOINT: BreakPoints,
      GRID_GAP: BreakPoints,
      GRID_OFFSET: BreakPoints,
      EXTRA_WIDTH: BreakPoints,
    },
    Z_INDEX: {
      PAGE_HEADER: number
      NAVIGATION: number
      OVERLAY: number
    },
    TRANSITION: {
      TRANSITION_EASE_IN_OUT: string
    },
    GRADIENT: {
      RED: string;
      RED_VERTICAL: string;
    },
    BORDER_RADIUS: {
      XS: string,
      SM: string,
      MD: string,
      LG: string
    },
    BOX_SHADOW: {
      TOP: string,
      BOTTOM: string,
      ALL: string
    }
  }
}
