import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./styles/theme";
import { ChakraProvider} from "@chakra-ui/react";
import { UserProvider } from "./context/userContext.tsx";
import { BrowserRouter } from "react-router-dom";
import FocusedPostProvider from "./context/focusedPostContext.tsx";
import { ColorModeScript } from "@chakra-ui/react";

/* const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
      },
    }),
  },
}); */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false} cssVarsRoot="body">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <UserProvider>
          <FocusedPostProvider>
            <App />
          </FocusedPostProvider>
        </UserProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
