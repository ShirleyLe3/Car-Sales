import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import carReducer from "./reducers/carReducer";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

//  create store        import createStore
// wrap around Provider  import Provider
// connect to dispatch  import connect

const store = createStore(carReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
// anything between Provider has access to 'store'
// don't need to connect store to App because its not using it
