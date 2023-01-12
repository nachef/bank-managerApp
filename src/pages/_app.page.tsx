import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import GlobalFonts from "../assets/styles/fonts";
import { ClientsContext, ClientsProvider } from "../contexts/clients";
import { AccountProvider } from "../contexts/logincontext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <AccountProvider>
        <ClientsProvider>
          <Component {...pageProps} />
        </ClientsProvider>
      </AccountProvider>
    </ThemeProvider>
  );
}
