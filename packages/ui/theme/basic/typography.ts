import { css } from 'styled-components'
import font from './font'
import layout from './layout'
import COLOR from './color'

const H1 = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 600;
  font-style: normal;
  font-size: 3.2rem;
  line-height: 1.25;
  
  @media screen and (min-width: ${layout.BREAKPOINT.MD}px) {
    font-size: 6.4rem;
  }
`

const H2 = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 600;
  font-style: normal;
  font-size: 2.4rem;
  line-height: 1.16;
  
  @media screen and (min-width: ${layout.BREAKPOINT.MD}px) {
    font-size: 4.8rem;
  }
`

const H3 = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 600;
  font-style: normal;
  font-size: 2.4rem;
  line-height: 1.5;
  
  @media screen and (min-width: ${layout.BREAKPOINT.MD}px) {
    font-size: 3.2rem;
    line-height: 1.25;
  }
`

const H4 = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  line-height: 3.2rem;
`

const BODY = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 400;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 1.55;
`

const BODYBOLD = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 700;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 1.55;
`

const BODYSMALL = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 400;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.6;
`

const LINK = css`
  font-family: ${font.FONT_PRIMARY};
  font-weight: 400;
  font-style: normal;
  line-height: 1.55;
  font-size: 1.8rem;
  color: ${COLOR.BLUE}
`

const typography = {
  H1,
  H2,
  H3,
  H4,
  BODY,
  BODYBOLD,
  BODYSMALL,
  LINK
}

export default typography
