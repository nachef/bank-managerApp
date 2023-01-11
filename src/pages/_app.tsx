import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import Home from "./Home";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Home />
    </ThemeProvider>
  );
}
