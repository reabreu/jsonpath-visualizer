import { createGlobalStyle } from "styled-components";
import RobotoLight from "./fonts/Roboto/Roboto-Light.ttf";
import RobotoThin from "./fonts/Roboto/Roboto-Thin.ttf";
import { theme } from "./theme";

export default createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: auto;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.quinary};
    color: ${theme.colors.primary};
  }
  
  html {
    box-sizing: border-box;
    font-family: "Roboto";
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul {
    font-size: 20px;
  }
`;
