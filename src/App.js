import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";

import "./config/ReactotronConfig";

import GlobalStyle from "./styles/global";
import Header from "./components/Header/index";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
