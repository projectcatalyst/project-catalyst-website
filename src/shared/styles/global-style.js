import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  // NOTE: Applying height property to both nextjs generated div and empty child div
  html, body, #__next, #__next > div {
    height: auto;
  }

  * {
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif, Helvetica;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

export default GlobalStyle