import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

${reset}

/* add */
*[hidden] { /* HTML5 hidden-attribute fix for newer browsers */
    display: none;
}
a {
    text-decoration: none;
    color: inherit;
}

/* body */
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}

`;

export default GlobalStyle;
