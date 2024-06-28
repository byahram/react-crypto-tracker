import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./utils/atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeBtn />
      <main id="main">
        <Router />
      </main>
    </ThemeProvider>
  );
}

export default App;
