import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Roboto,  Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body, #__next {
    height: 100%;
  }
`;

export default GlobalStyles;
