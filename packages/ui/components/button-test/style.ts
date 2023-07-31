import styled, { css } from 'styled-components'
import breakpoint from '../../utils/breakpoint'
import { IButton, ILink } from '../../utils/types'

interface IContainerProps {
  isfullwidth?: boolean,
  onClick?: ()=> void
  $appearance: IButton['appearance']
}

export const Container = styled.span<IContainerProps>(({
  theme: {
    COLOR, BORDER_RADIUS, GRADIENT
  },
  isfullwidth,
  $appearance
}) => css`
  ${isfullwidth ? css`
    display: block;
    width: 100%;
  ` : css`
    display: inline-block;
  `}
  
  position: relative;
  background-color: ${$appearance === 'primary' ? COLOR.BLUE : COLOR.WHITE};
  text-align: center;
  border-radius: ${BORDER_RADIUS.SM} 0;
  transition: filter 300ms;
  overflow: hidden;
  mask-image: radial-gradient(white, black);/* Fixes a safari bug where the background gradient ignores border-radius */
  color: ${$appearance === 'primary' ? COLOR.WHITE : COLOR.BLUE};
  ${$appearance === 'secondary' && css`
    border: 0.4rem solid ${COLOR.BLUE};
  `}
  padding: ${$appearance === 'secondary' ? 1.2 : 1.6}rem 2rem;

  ${breakpoint('XS')} {
    padding-left: 2.8rem;
    padding-right: 2.8rem;
  }

  ${breakpoint('MD')} {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }

  ${$appearance === 'secondary' && css`
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0, 1.03);
    transition-property: background-color, color;
    
    &:hover {
      background-color: ${COLOR.BLUE};
      color: ${COLOR.WHITE};
    }
  `}
  
  ${$appearance === 'primary' && css`
    ${breakpoint('MD')} {
      &:before {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background: ${GRADIENT.RED};
        transform: scale3d(0, 1, 1);
        transition: transform cubic-bezier(0, 0, 0, 1.03) 0.2s;
        transform-origin: left center;
      }

      &:hover:not([disabled]) {
        &:before {
          transform: scale3d(1, 1, 1);
        }
      }
    }
  `}
  
  
  
  &:disabled {
    background: ${COLOR.LIGHTBLUE};
    cursor: not-allowed;
  }
`)

export const Label = styled('p')(() => css`
  display: block;
  position: relative;
`)
