import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import theme from "./theme";
import store from "./redux/store";
import "./index.scss";
require("dotenv").config();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
