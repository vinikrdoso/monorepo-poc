type BreakpointSizes = 'XXS' | 'XS' | 'SM' | 'MD' | 'LG'

const breakpoint = (size:any, type = 'min'): string => {
  return `@media screen and (${type}-width: ${size - (type === 'max' ? 1 : 0)}px)`
}

export default breakpoint
