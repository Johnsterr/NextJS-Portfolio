import { ThemeProvider as StyledThemeProvider } from "styled-components";

import theme from "../styles/default.js";
import GlobalStyles from "../styles/globals.js";

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
