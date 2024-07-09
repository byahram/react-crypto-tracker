import Router from "./Router.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme.ts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
// import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </ThemeProvider>
  );
}

export default App;
