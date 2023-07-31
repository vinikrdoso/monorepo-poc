import { createGlobalStyle } from 'styled-components'
// import 'slick-carousel/slick/slick.css'
import COLOR from '../theme/basic/color'

// Keep this file as small as possible.

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: ${COLOR.BLACK}
}

body {
  color: ${COLOR.GREY};
  font-size: 1.6rem;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}
`

export default GlobalStyle
