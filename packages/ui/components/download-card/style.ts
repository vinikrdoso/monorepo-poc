import styled, { css } from 'styled-components'
import breakpoint from '../../utils/breakpoint'

export const Container = styled.div(({ theme }) => css`
  border-radius: ${theme.BORDER_RADIUS.MD} 0;
  border: 2px ${theme.COLOR.LIGHTGREY} solid;
  padding: 2.4rem;
`)

export const List = styled.ul`
  margin-top: 4rem;

  ${breakpoint('MD')} {
    margin-top: 8rem;
  }
`

export const ListItem = styled.li(({ theme }) => css`
  & + & {
    margin-top: 1.6rem;
  }
  
  &:last-child {
    ${Container} {
      border-radius: 0 0 ${theme.BORDER_RADIUS.MD} 0;
    }
  }
`)

export const ButtonWrapper = styled.div`
  ${breakpoint('MD')} {
    display: inline-block;
    float: right;
  }
`

export const TitleWrapper = styled.div(({ theme: { GRADIENT, COLOR } }) => css`
  margin-bottom: 1.6rem;
  position: relative;
  background: ${COLOR.WHITE};
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${GRADIENT.RED};
    mix-blend-mode: screen;
  }

  ${breakpoint('MD')} {
    margin-bottom: 0.4rem;
  }
`)
