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

/* main */
#main {
    background: ${(props) => props.theme.cardBgColor};
    width: 1280px;
    height: 50vh;
    margin: 6rem auto;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 50px 0px;
}

/* icon */
.icon {
    border-radius: 9999px;
    cursor: pointer;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    margin: 0.5rem;
    padding: 0.75rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.textColor};;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

    &:hover {
        scale: 1.1;
    }
}
`;

export default GlobalStyle;
