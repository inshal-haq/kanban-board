import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { switchTheme } from "./components/switchTheme";
import { Provider } from "react-redux";

import store from "./store/index.ts";

const theme = extendTheme({
  components: { Switch: switchTheme },
});
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </Provider>
  </React.StrictMode>,
);
