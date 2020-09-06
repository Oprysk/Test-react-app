import React from "react";
import { setConfig } from "react-hot-loader";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import Router from "../../containers/Router";
import history from "../../history";
import { persistor } from "../../persistor";
import { store } from "../../store";
import { GlobalStyle } from "./styles";
import theme from "../../theme";

setConfig({
  reloadHooks: false,
});

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history} />
    </ThemeProvider>
  </Provider>
);

export default hot(App);
