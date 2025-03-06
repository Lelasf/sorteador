import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Themes";
import GlobalStyles from "./styles/GlobalStyles";
import { RecoilRoot } from "recoil";
import AppRouter from "./routes/routes";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
