import { useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import Router from "./Router.tsx";
import { darkTheme, lightTheme } from "./theme/theme.ts";
import { isDarkAtom } from "./stores/atoms.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import ThemeBtn from "./components/ThemeBtn";
// import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeBtn />
      <Main id="main">
        <Router />
      </Main>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </ThemeProvider>
  );
}

export default App;

const Main = styled.main`
  background: ${(props) => props.theme.cardBgColor};
  width: 1280px;
  aspect-ratio: 16 / 9;
  margin: 6rem auto 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 50px 0px;
  overflow: hidden;
`;
