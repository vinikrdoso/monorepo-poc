"use client"

import { ReactNode } from 'react'
import {Providers as StoreProvider} from "store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
    {children}
    </StoreProvider>
  )
}

export default Providers