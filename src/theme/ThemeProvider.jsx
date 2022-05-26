import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "./theme.js";
import GlobalStyles from "../styles/globals.js";

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
