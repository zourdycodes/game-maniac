import { primaryColor } from '../theme/index'
import { fontFamily } from '../fonts/index'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*,*::before,*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  font-family: ${fontFamily};
  margin: 0;
  background-color: ${primaryColor};
  }

`
