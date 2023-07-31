"use client"
import { ReactNode } from 'react'
import {Providers as StoreProvider} from "store";
import { THEME, GlobalStyle } from 'ui/theme'
import { ThemeProvider } from 'styled-components'
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={THEME}>
        <StoreProvider>
        <GlobalStyle />
        {children}
        </StoreProvider>
      </ThemeProvider>
  )
}

export default Providers